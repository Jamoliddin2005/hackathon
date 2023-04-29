const { Schema, model } = require("mongoose");

const teamsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    matchCount: {
        type: Number,
        required: true,
        default: 0
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = model("teams", teamsSchema)