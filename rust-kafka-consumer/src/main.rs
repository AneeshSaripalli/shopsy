use kafka::consumer::{Consumer, FetchOffset, GroupOffsetStorage};

fn main() {
    let mut consumer = Consumer::from_hosts(vec!["kafka:9092".to_owned()])
        .with_topic_partitions("KafkaConnectivityTest".to_owned(), &[0])
        .with_fallback_offset(FetchOffset::Latest)
        .with_offset_storage(GroupOffsetStorage::Kafka)
        .create()
        .unwrap();

    loop {
        for msg_set in consumer.poll().unwrap().iter() {
            println!("Message in poll!");
            for m in msg_set.messages() {
                println!("{:?}", m);
            }

            let result = consumer.consume_messageset(msg_set);
            if let Ok(_) = result {
                println!("Successfully consumed messages.");
            }
        }

        let commit = consumer.commit_consumed();

        println!("Looping");
    }
}
