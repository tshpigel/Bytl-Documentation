const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mailer = require('nodemailer');
const app = express();

require('dotenv').config();
const { MongoClient } = require('mongodb');

app.use(cors());
app.use(express.static('/progs'));
app.use(express.json());

async function encrypt(pwinput) {
    const saltiness = 11;
    const hash = bcrypt.hash(pwinput, saltiness);
    return hash;
}

app.post('/mac', (req, res) => {
    res.sendFile('./progs/Bytl_MacOS.pkg', { root: __dirname });
});

app.post('/signup', async (req, res) => {
    const data = req.body;
    
    const URI = process.env.MONGO_CONN_URI;
    const client = new MongoClient(URI);

    const result = {};

    try {
        const database = client.db('docs');
        const userdata = database.collection('userdata');

        const doc = await userdata.findOne({ email: data.email });
        console.log(doc, 'signup doc');
        if(doc) result.success = false;

        else {
            userdata.insertOne({
                email: data.email,
                news: true,
                ...(data?.pass ? 
                    { pass: await encrypt(data.pass), files: [["index", ""]] } :
                    { pass: false, files: false })
            });
            result.success = true;
        }
    } catch(e) {
        console.dir(e);
        result.success = false;
    } finally {
        await client.close();
    }

    console.log(data);
    res.json(result);
});

app.post('/login', async (req, res) => {
    const data = req.body;
    
    const URI = process.env.MONGO_CONN_URI;
    const client = new MongoClient(URI);

    const result = {};

    try {
        const database = client.db('docs');
        const userdata = database.collection('userdata');

        const doc = await userdata.findOne({ email: data.email });
        if(!doc) result.success = false;

        if(data.pass === "" && !doc.pass)
            result.success = true;
        else 
            result.success = await bcrypt.compare(data.pass, doc.pass);
    } catch(e) {
        console.dir(e);
        result.success = false;
    } finally {
        await client.close();
    }

    console.log(data);
    res.json(result);
});

app.post('/filesend', async (req, res) => {
    const data = req.body;
    const URI = process.env.MONGO_CONN_URI;
    const client = new MongoClient(URI);

    const result = {};

    try {
        const database = client.db('docs');
        const userdata = database.collection('userdata');

        const doc = await userdata.findOne({ email: data.email });
        if(!doc) result.success = false;
        else {
            await userdata.updateOne(
                { email: data.email }, 
                { $set: { 
                    files: data.files, 
                    time: data.time 
                }
            });
            result.success = true;
        }
    } catch(e) {
        console.dir(e);
        result.success = false;
    } finally {
        await client.close();
    }

    res.json(result);
});

app.post('/fileget', async (req, res) => {
    const data = req.body;
    
    const URI = process.env.MONGO_CONN_URI;
    const client = new MongoClient(URI);

    const result = {};

    try {
        const database = client.db('docs');
        const userdata = database.collection('userdata');

        const doc = await userdata.findOne({ email: data.email });
        if(!doc) result.success = false;

        result.files = doc.files;
        result.time = doc.time;
        result.success = true;
    } catch(e) {
        console.dir(e);
        result.success = false;
    } finally {
        await client.close();
    }

    res.json(result);
})

app.listen(2000, () => {
    console.log('localhost is running on port 2000');
});