import bodyParser from 'body-parser';
import express from 'express'
import connectDb  from './db/db.js';
import cors from 'cors'
const app = express();
const PORT  = process.env.PORT || 5000
const DATABASE_URL= process.env.DATABASE_URL ||"mongodb://localhost:27017"
import router from './routes/index.js'


app.use(bodyParser.json({ extended:true}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cors())
// database connection
connectDb(DATABASE_URL);
// setup routing
app.use('/api',router)

app.listen(PORT,()=>{
    console.log(`Serving on port http://localhost:${PORT}`)
})