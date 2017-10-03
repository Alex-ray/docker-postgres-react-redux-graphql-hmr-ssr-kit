import express from 'express';
import models from '../models';
import logger from '../logger';

const router = express.Router();


//list
router.get('/notes/', function(req, res) {
    models.notes.findAll()
    .then(function(notes) {
        res.json(notes.map(note => note.toJSON()));
    })
    .catch(function(e) {
        logger.error('error fetching notes', e);
        res.status(500).json({});
    });
});

//delete
router.delete('/notes/:id', function(req, res) {
    models.notes.findById(req.params.id)
    .then(function(note) {
        if (note) {
            return note.destroy()
            .then(function() {
                res.status(200).json({});
            });
        }

        res.status(404).json({});
    })
    .catch(function(err) {
        logger.error('error destroying note', err);
        res.status(500).json({});
    });
})

//create
router.post('/notes/', function(req, res) {
    logger.info('creating note', JSON.stringify(req.body));

    models.notes.create(req.body)
    .then(function(note) {
        res.status(201).json(note.toJSON());
    })
    .catch(function(err) {
        logger.error('error creating note', err);
        res.status(500).json();
    });
})

export default router;