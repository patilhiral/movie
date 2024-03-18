import {NextFunction, Request,Response} from 'express';
import MovieService from '../services/movie.service';


export const getAllMovies= async function(req:Request,res:Response,next:NextFunction)=>{
    try{
        const movies = await MovieService.getAllMovies();
        res.status(200).json(movies);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}