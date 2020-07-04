use kafka::producer::{Producer, Record, RequiredAcks};
use std::fmt::Write;
use std::time::Duration;

fn main() {
    let mut kafka_init = false;

    while !kafka_init {
        let hosts = vec!["kafka:9092".to_owned()];
        let mut producer = Producer::from_hosts(hosts)
            .with_ack_timeout(Duration::from_secs(1))
            .with_required_acks(RequiredAcks::One)
            .create();

        if let Err(err) = producer {
            eprintln!("Failed to iniitalize Kafka connection, {:?}", err);
            std::thread::sleep(Duration::from_secs(2));
            continue;
        }

        kafka_init = true;

        println!("Kafka connection succeeded.");
    }
}
