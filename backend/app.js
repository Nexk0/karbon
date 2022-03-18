// import and create an express app
import express from 'express';
import router from './routes/index.js';

const app = express();
app.use(express.json());
app.use(router);

// now run the application and start listening
// on port 3000
app.listen(8080, () => {
    console.log("app running on port 3000...");
})