use kafka::error::Error;
use kafka::producer::{Producer, Record, RequiredAcks};
use std::fmt::Write;
use std::time::Duration;

fn kafka_producer(max_attempts: u32) -> Result<Producer, Error> {
    for _ in 1..max_attempts {
        let hosts = vec!["kafka:9092".to_owned()];
        let producer = Producer::from_hosts(hosts)
            .with_ack_timeout(Duration::from_secs(1))
            .with_required_acks(RequiredAcks::One)
            .create();

        if let Err(_err) = producer {
            eprintln!("Kafka Connection failure");
            std::thread::sleep(Duration::from_secs(1));
            continue;
        }

        println!("Kafka connection succeeded.");

        return producer;
    }

    Err(Error::from_kind(kafka::error::ErrorKind::NoHostReachable))
}
fn main() {
    let mut producer = kafka_producer(10).unwrap();
    let kafka_topic = "KafkaConnectivityTest";

    println!("{:?}", producer.client().topics());

    let mut buf = String::with_capacity(2);
    for i in 0..10 {
        let _ = write!(&mut buf, "{}", i);
        let result = producer.send(&Record::from_value(kafka_topic, buf.as_bytes()));
        if let Ok(_) = result {
            println!("Data sucessfully written to Kafka stream");
        }
        if let Err(err) = result {
            println!("Data failed {:?}", err);
        }
    }
}
