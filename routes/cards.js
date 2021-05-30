const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    text: 'What is MongoDB?',
    author: 'Jane Doe',
    votes: 33,
    id: '0',
  },
  {
    text: 'What are you doing on the weekend?',
    author: 'John Doe',
    votes: 5,
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundCard = cards.find(card => card.id === id)
  foundCard ? res.json(foundCard) : next()
})

router.post('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuidv4() }
  users.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const user = cards[index]
  const updatedCards = { ...card, ...req.body }
  cards.splice(index, 1, updatedCard)
  res.json(updatedCard)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  users = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
