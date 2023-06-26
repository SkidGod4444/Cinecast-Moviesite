import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password cannot be more than 8 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: "",
    },
    favourite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
    },],
},
    {
        timestamps: true,
        }
    );

export default mongoose.model("User", userSchema);