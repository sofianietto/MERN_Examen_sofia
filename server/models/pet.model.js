const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        unique: true,
        minlength: [3, "El nombre debe tener al menos 3 (tres) caracteres como minimo."],
    },
    type: {
        type: String,
        required: [true, "El tipo de mascota es requerido"],
        minlength: [3, "El tipo de mascota debe tener al menos 3 (tres) caracteres como minimo."],
    },
    description: {
        type: String,
        required: [true, "La desrcripcion es requerida"],
        minlength: [3, "la descripcion debe tener al menos 3 (tres) caracteres como minimo."],
    },
    skill_uno: {
        type: String,
        required: false
    },
    skill_dos:  {
        type: String,
        required: false
    },
    skill_tres: {
        type: String,
        required: false
    },

}, { timestamps: true });

PetSchema.plugin(uniqueValidator, { message: "El nombre ya está usado" })

module.exports.PetModel = mongoose.model('Pet', PetSchema);