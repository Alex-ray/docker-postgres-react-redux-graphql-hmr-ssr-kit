'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//list
router.get('/notes/', function (req, res) {
    _models2.default.notes.findAll().then(function (notes) {
        res.json(notes.map(function (note) {
            return note.toJSON();
        }));
    }).catch(function (e) {
        _logger2.default.error('error fetching notes', e);
        res.status(500).json({});
    });
});

//delete
router.delete('/notes/:id', function (req, res) {
    _models2.default.notes.findById(req.params.id).then(function (note) {
        if (note) {
            return note.destroy().then(function () {
                res.status(200).json({});
            });
        }

        res.status(404).json({});
    }).catch(function (err) {
        _logger2.default.error('error destroying note', err);
        res.status(500).json({});
    });
});

//create
router.post('/notes/', function (req, res) {
    _logger2.default.info('creating note', JSON.stringify(req.body));

    _models2.default.notes.create(req.body).then(function (note) {
        res.status(201).json(note.toJSON());
    }).catch(function (err) {
        _logger2.default.error('error creating note', err);
        res.status(500).json();
    });
});

exports.default = router;