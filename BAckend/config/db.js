import mongoose from "mongoose";

const Mongo_url = process.env.mongo_url;

const database = () => {
    mongoose.connect(Mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((conc) => {
            console.log(`connected to DB:${conc}`);
        })
        .catch((error)=>{
            console.log(error);
        });
};

export default database;
