import mongoose from "mongoose";

const schema =mongoose.Schema;

export const EmployeeSchema = new schema ({
    firstName:{
        type: String,
        required: "Enter firstname of employee!"
    },
    lastName:{
        type: String,
        required: "Enter lastname of employee!"
    },
    email:{
        type: String
    },
    gender:{
        type: String       
    },
    phoneNumber:{
        type: Number,
        required: "Enter phoneNumber of employee!"
    },
    department:{
        type: String        
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})