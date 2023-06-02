import express from "express";
// import connectDB from "./db/condb.js";
// const mongoose =require('mongoose');
import mongoose from 'mongoose';
// const { connectDB } = require('./db/condb')
// const connectToMongo = require('./db/condb')
import { join } from "path";
import web from './routes/web.js'
const app =express();
import connectDB from "./db/condb.js";
const port = process.env.PORT || '3000';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017/school";


connectDB(DATABASE_URL);

// middleware for geting form date by req.body if coming undefined
app.use(express.urlencoded({extended:false}));

// including static/public files
app.use('/student',express.static(join(process.cwd(),'public')));
app.use('/student/edit',express.static(join(process.cwd(),'public')));

// set Template Engine
app.set('view engine','ejs');

// Load Routes
app.use('/student',web);

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})