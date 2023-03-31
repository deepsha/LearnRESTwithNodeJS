import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/router/employeeRouter';

const app = express();
const PORT =5000;
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb',{
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app)

app.get(`/`,(request,response)=>{
    response.send(`server is running on port:${PORT}`)
})
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
   
});