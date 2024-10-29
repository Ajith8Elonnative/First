import movie from "../models/movie.model.js"

export const movieIndex = async (req, res) => {
    try {
        const movies = await movie.findOne()
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const movieDetails =  (req, res) ={
 
} 

export const movieCreate = async (req, res) => {

    const newMovie = new movie({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const Movie = await newMovie.save();
        return res.status(201).json(Movie)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
    // console.log(req.body)
    // return res.json(req.body)
}

export const movieUpdate = (req, res) => {

}
export const movieDelete = (req, res) => {

}