const schedule = require('node-schedule')

// Tarefa programada para executar a cada 5 segundos no minuto 57 das 16 horas de quarta-feira
const tarefa1 = schedule.scheduleJob('*/5 57 16 * * 3', function () {
    console.log('Executando tarefa 1 no segundo', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1...')
}, 30000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2 no segundo', new Date().getSeconds())
})
