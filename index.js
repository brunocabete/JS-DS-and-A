// @ts-check
const Stack = require('./stack')
const Queue = require('./queue')
const Deque = require('./deque')

function hotPotato(elementsList, num) {
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminatedList.push(queue.dequeue())
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const rounds = getRandomIntInclusive(1, 30)
const result = hotPotato(names, rounds)
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
})
console.log(`The winner is: ${result.winner}`)