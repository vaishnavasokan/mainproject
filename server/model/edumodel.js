var mongoose = require("mongoose");
var schema = mongoose.Schema;

var eduSchema = new schema(
    {
        
        board10th: {
            type: String,
            required: true
        },  
        school10th: {
            type: String,
            required: true
        },
        percentage10th: {
            type: Number,
            required: true
        },
        yearofpassing10th: {
            type: Number,
            required: true
        },
        board12th: {
            type: String,
            required: true
        },
        branch12th: {
            type: String,
            required: true
        },
        school12th: {
            type: String,
            required: true
        },
        percentage12th: {
            type: Number,
            required: true
        },
        yearofpassing12th: {
            type: Number,
            required: true
        },

        course: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        university: {
            type: String,
            required: true
        },
        college: {
            type: String,
            required: true
        },
        percentageclg: {
            type: Number,
            required: true
        },
        yopcollege: {
            type: Number,
            required: true
        },
        userid: {
            type: schema.Types.ObjectId,
            ref: 'users'
        },

    }
)
var edumodel = mongoose.model("jobs", eduSchema, "jobs");
module.exports = edumodel;