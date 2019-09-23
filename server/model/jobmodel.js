var mongoose = require("mongoose");
var schema = mongoose.Schema;

var jobSchema = new schema(
    {
        jobtitle: {
            type: String,
            required: true
        },
        jdesc: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true,
            enum: ["Matriculation", "Plus Two", "Graduate", "Post Graduate", "Any", "Others(Specify in description)"]
        },
        experience: {
            type: String,
            required: true
        },
        openingAvailable: {
            type: Number,
            required: true
        },
        salary: {
            type: String,
            required: true
        },
        jlocation: {
            type: String,
            required: true
        },
        postedBy: {
            type: schema.Types.ObjectId,
            ref: 'recruiters'
        },
        applicants: [{
            type: schema.Types.ObjectId,
            ref: 'users'
        }]
    }
)
var jobmodel = mongoose.model("jobs", jobSchema, "jobs");
module.exports = jobmodel;