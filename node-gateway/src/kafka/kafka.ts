import kafka from "kafka-node";

const KafkaClient = new kafka.KafkaClient({
    kafkaHost: "kafka:9092",
    connectTimeout: 5000
});

export { KafkaClient };

const KafkaProducer = new kafka.Producer(KafkaClient);

KafkaProducer.on('ready', () => {
    console.log("Kafka Producer ready.")
    KafkaProducer.send([{
        topic: "KafkaConnectivityTest",
        messages: [
            "hello",
            "world"
        ]
    }],
        (error, data) => {
            console.error(error)
            console.log("Data", data)
        })

});

export default KafkaProducer;