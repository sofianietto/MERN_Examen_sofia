const { PetModel } = require("../models/pet.model");

module.exports = {

    getAllPets: (req, res) => {
        PetModel.find()
            .then((allPets) => res.status(200).json(allPets))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOnePetById: (req, res) => {
        PetModel.findOne({ _id: req.params.id })
            .then((oneSinglePet) => res.status(200).json({ Pet: oneSinglePet }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },

    createNewPet: (req, res) => {
        PetModel.create(req.body)
            .then((newlyCreatedPet) => res.status(201).json({ Pet: newlyCreatedPet }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    updateOnePetById: (req, res) => {
        PetModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then((updatedPet) => res.status(200).json({ Pet: updatedPet }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    updateGamesPetById: (req, res) => {
        PetModel.findOne({ _id: req.params.id })
        .then((oneSinglePet) => {

            console.log("GAME:", req.params.game) // 0
            console.log("BODY",  req.body) //{ status: 'Playing' }

            oneSinglePet.games[req.params.game] = req.body.status
            oneSinglePet.save()

            return res.status(200).json({ Pet: oneSinglePet })
        })
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", error: err })
        );
    },
    deleteOnePetById: (req, res) => {
        PetModel.deleteOne({ _id: req.params.id })
            .then((result) => res.status(200).json({ result: result }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
}