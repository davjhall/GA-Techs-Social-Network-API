const router = require('express').Router;

const {

    getThoughtsById,
    getAllThoughts,
    createThoughts,
    removeThoughts,
    removeReation,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughtControllers')