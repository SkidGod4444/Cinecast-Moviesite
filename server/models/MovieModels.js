import mongoose from 'mongoose';


const moviesSchema = mongoose.Schema({
    MovieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
    },

    name:{
        type: String,
        required: true,
    },

    desc:{
        type: String,
        required: true,
    },

    poster:{
        type: String,
        required: true,
    },

    titleimg:{
        type: String,
        required: true,
    },

    language:{
        type: String,
        required: true,
    },

    year:{
        type: Number,
        required: true,
    },

    director:{
        type: String,
        required: true,
    },

    category:{
        type: String,
        required: true,
    },

    ratings:{
        type: Number,
        required: true,
    },

    time:{
        type: Number,
        required: true,
    },
    
    agelimit:{
        type: Number,
        required: true,
    },

    video:{
        type: String,
        // required: true,
    },
},
{
    timestamps: true,
});

export default mongoose.model('Movie', moviesSchema);