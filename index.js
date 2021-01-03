require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('person', (req, res) => JSON.stringify(req.body))

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

app.get('/info', (req, res) => {

    res.send(`<p>Phonebook has info for ${persons.length} people</p>
              <p>${new Date().toString()}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
    
    Person.findById(req.params.id).then(person => {
        
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

/* const generateId = () => {
    const id = Math.floor(Math.random() * 1000000)

    return id
} */

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'missing information'
        })
    }

    /* if (persons.some(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    } */

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.status(201).json(savedPerson)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})