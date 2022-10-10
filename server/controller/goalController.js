const asynchandler = require('express-async-handler');

const Goal = require('../models/goalModel');

const getGoals = asynchandler(async (req, res) => {

    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json(goals);
})

const setGoal = asynchandler(async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please enter text field')
    }
    
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id 
    })

    res.status(200).json(goal);
})

const updateGoal = asynchandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Gol not found')
    }

    await goal.updateOne({ text: req.body.text })
    const updatedGoal = await goal.save()

    res.status(200).json(updatedGoal);
})

const deleteGoal = asynchandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Gol not found')
    }
    await goal.remove()
    res.status(200).json(req.params.id);
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}