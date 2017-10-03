import express from 'express';
import notes from './notes';

const router = express.Router();
router.use(notes);
export default router;