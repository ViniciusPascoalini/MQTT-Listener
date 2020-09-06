const mqtt = require('./node_modules/mqtt')
const checkStopCondition = require('./dataCollect/checkStopCondition')


const options = {
  host: 'tnt-iot.maratona.dev',
  port: 30573,
  username: 'maratoners',
  password: 'ndsjknvkdnvjsbvj',
  clean: false,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
}

const client = mqtt.connect(options)

client.subscribe('tnt')

client.on('message', function (topic, message) {
  message =  JSON.parse(message)
   
  checkStopCondition(message)

})

