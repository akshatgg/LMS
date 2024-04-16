import mongoose from "mongoose";
const Mongo_url = process.env.mongo_url;
mongoose.set('strictQuery', false);  //this thing said when we ask for extra info then and you didi not have then did not give error just ignore it //

const database = () => {
    mongoose.connect(process.env.Mongo_url)
        .then((conc) => {
            console.log(`connected toDB:${conc}`);
        })
        .catch((error)=>{
            console.log(error);
          })
}

export default database;
