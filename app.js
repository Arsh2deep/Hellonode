// Import the express module
import express from 'express';

//Instantiate
const app = express();

//Define a port number where
//servers will listen
const PORT = 3000;

//Define the route path
app.get('/',(req,res)=> {
    //send text to the client
    res.send('<h1>Hello, world!</h1>');
});

//Start the server
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});