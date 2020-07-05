use kafka::consumer::{Consumer, FetchOffset, GroupOffsetStorage};

fn handle_kafka_message(message: &kafka::consumer::Message<'_>) {
    let kafka_msg_value = std::str::from_utf8(message.value).unwrap();

    println!("Kafka value {:?}", kafka_msg_value);
}

fn main() {
    let mut consumer = Consumer::from_hosts(vec!["kafka:9092".to_owned()])
        .with_topic_partitions("KafkaConnectivityTest".to_owned(), &[0])
        .with_fallback_offset(FetchOffset::Latest)
        .with_offset_storage(GroupOffsetStorage::Kafka)
        .create()
        .unwrap();

    loop {
        for msg_set in consumer.poll().unwrap().iter() {
            for m in msg_set.messages() {
                handle_kafka_message(m);
            }

            let result = consumer.consume_messageset(msg_set);
            if let Ok(_) = result {
                println!("Successfully consumed messages.");
            }
        }

        consumer.commit_consumed().unwrap();
    }
}
