const express = require("express");

const PetController = require("../controllers/pet.controller");

const PetRouter = express.Router();

//api/Pet/
PetRouter.post("/", PetController.createNewPet);
PetRouter.get("/", PetController.getAllPets);
PetRouter.get("/:id", PetController.getOnePetById);
PetRouter.put("/:id", PetController.updateOnePetById);
PetRouter.patch("/:id/:game", PetController.updateGamesPetById);
PetRouter.delete("/:id", PetController.deleteOnePetById);


module.exports = PetRouter;