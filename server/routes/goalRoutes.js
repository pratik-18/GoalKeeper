const express = require('express');

const  goalController = require('../controller/goalController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, goalController.getGoals)

router.post('/', protect, goalController.setGoal)

router.put('/:id', protect, goalController.updateGoal)

router.delete('/:id', protect, goalController.deleteGoal)


module.exports = router