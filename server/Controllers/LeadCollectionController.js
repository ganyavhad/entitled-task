const Router = require("express").Router()
const _ = require('lodash')

const LeadCollection = require('../Models/LeadCollectionModel')

const params = ["name", "pan", "empId", "amountRequested", "noOfEmis"]

Router.post('/create', async (req, res) => {
    try {
        let keys = Object.keys(req.body)
        if (_.isEmpty(_.difference(keys, params))) {
            res.status(400).send({ message: "Missing required input parameters" })
            return
        }
        let lead = new LeadCollection(req.body)
        let savedData = await lead.save()
        res.status(200).send({ message: "Data saved successfully", data: savedData })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
Router.post('/search', async (req, res) => {
    try {
        let leads = await LeadCollection.find(req.body)
        let message = "Data found"
        if (_.isEmpty(leads)) {
            message = "Data not found"
        }
        res.status(200).send({ message, data: leads })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
Router.get('/read/:id', async (req, res) => {
    try {
        let lead = await LeadCollection.findOne({ _id: req.params.id })
        let message = "Data found"
        if (_.isEmpty(lead)) {
            message = "Data not found"
        }
        res.status(200).send({ message, data: lead })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

Router.put('/update/:id', async (req, res) => {
    try {
        let keys = Object.keys(req.body)
        if (_.isEmpty(_.difference(keys, params))) {
            res.status(400).send({ message: "Missing required input parameters" })
            return
        }
        delete _id;
        let updatedData = await LeadCollection.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        res.status(200).send({ message: "Data updated successfully", data: updatedData })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
Router.delete('/delete/:id', async (req, res) => {
    try {
        let lead = await LeadCollection.deleteOne({ _id: req.params.id })
        let message = "Deleted successfully"
        if (lead.n === 0) {
            message = "Data not found"
        }
        res.status(200).send({ message, data: lead })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = Router