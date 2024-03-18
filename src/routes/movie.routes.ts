import express from 'express';
import { getAllMovies } from '../controller/movie.controller';
const router = express.Router();

router.get('/movies',getAllMovies)

export default router;