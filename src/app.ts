import express from 'express';
import movieRoutes from './routes/movie.routes'
const app = express();
app.use(express.json());

app.use('/movies',movieRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log('Server is running of port 3001')
})

export default app;