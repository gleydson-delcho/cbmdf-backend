import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();

 routes
  .post('/submit', UserController.createUser)
  .get('/findAll-users-success', UserController.findAllUsers)
  .get('/user/:email', UserController.findUser)
  .put('/update-user/:email', UserController.updateUser)
  .delete('/delete-user/:email', UserController.deleteUser)

export { routes };