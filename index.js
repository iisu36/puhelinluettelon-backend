require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')
require('express')

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('person', (req) => JSON.stringify(req.body))

app.use(morgan('tiny', {
    skip: (req, res) => res.statusCode === 201
}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :person', {
    skip: (req, res) => res.statusCode !== 201
}))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/info', async (req, res) => {

    const count = await Person.count()

    res.send(`<p>Phonebook has info for ${count} people</p>
              <p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (req, res, next) => {

    Person.findById(req.params.id)
        .then(person => {

            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {

    Person.findByIdAndRemove(req.params.id)
        .then( () => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedPerson => {
            res.status(201).json(savedPerson.toJSON())
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {

    const body = req.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

const errorHandler = (err, req, res, next) => {

    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (err.name === 'ValidationError') {
        return res.status(400).send({ error: err.message })
    }

    next(err)
}

app.use(errorHandler)

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})