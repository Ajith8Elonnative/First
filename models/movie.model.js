import { model, Schema } from "mongoose";

const scheme = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})
const movie = model('movie', scheme)
export default movie;