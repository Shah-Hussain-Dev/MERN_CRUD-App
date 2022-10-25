import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();


router.post('/add-user',UserController.addUser)
router.get('/all-users',UserController.getAlluser)
router.get('/single-user/:id',UserController.getSingleUserByID)
router.delete('/delete-user/:id',UserController.deleteById)
router.put('/update-user/:id',UserController.updateUserById)

export default router