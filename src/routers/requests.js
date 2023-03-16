const express = require("express")
const mongoose = require('mongoose')
const path = require('path')
const REQUEST = require('../models/requests')

const router = new express.Router()

router.post('/user/addRequest', async (req, res) => {
    try {
        //console.log(req.body)
        const transDetails = req.body
        const newReq = new REQUEST(transDetails)
        await newReq.save()
        res.status(200).send({
            status: "ok",
            message: "Processing done!"
        })
    } catch (e) {
        res.status(400).send({
            status: "error",
            message: e.message
        })
    }
})

router.post('/user/updateStatus', async (req, res) => {
    try {
        // console.log(req.body)
        const id = req.body.id
        const data = await REQUEST.findOneAndUpdate({
            "_id": id
        }, {
            status: 1
        })
        //data.status = 1
        //console.log(data)
        await data.save()
        res.status(200).send({
            status: "ok",
            message: "Processing done!"
        })
    } catch (e) {
        res.status(400).send({
            status: "error",
            message: e.message
        })
    }
})

router.get('/user/getRequests', async (req, res) => {
    try {
        const data = await REQUEST.find()
        res.status(200).send({
            status: "ok",
            message: data
        })

    } catch (e) {
        res.status(400).send({
            status: "error",
            message: e.message
        })
    }

})


module.exports = router