import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());


const FILE = "./scores.json";


function readScores(){
    return JSON.parse(
        fs.readFileSync(FILE)
    );
}


function saveScores(scores){
    fs.writeFileSync(
        FILE,
        JSON.stringify(scores,null,2)
    );
}


app.get("/leaderboard",(req,res)=>{

    let scores = readScores();

    scores.sort(
        (a,b)=>b.score-a.score
    );

    res.json(
        scores.slice(0,20)
    );
});


app.post("/score",(req,res)=>{

    const {
        name,
        score
    } = req.body;


    if(!name || !score){
        return res
        .status(400)
        .json({
            error:"dati mancanti"
        });
    }


    let scores=readScores();


    scores.push({

        name,
        score,
        date:new Date()

    });


    saveScores(scores);


    res.json({
        ok:true
    });

});


app.listen(3000,()=>{

    console.log(
        "🔥 Arrosticini API running"
    );

});