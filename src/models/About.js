import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema(
    {
        AboutMe: String,
        noOfProjects: String,
        yearOfExperiences: String,
        noOfClients: String,
        skills: String,
    },
    {
        timestamps: true
    }
);

const About = mongoose.models.About || mongoose.model('About', AboutSchema);

export default About;