import express from  'express';
import { healthRouter, calculatorRouter } from './routes';
import { logger } from './middleware/log';

const app = express();
const port = 3000;

app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);



app.listen(port , ()=>{
    console.log(`App is running at http://localhost:${port}`);
})