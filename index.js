const express = require('express');
const cors= require("cors")
const app = express();
const port = 82;

app.use(cors());
app.use(express.json());

app.get("/sensor1", (req,res)=>{
    res.send({sensor:[{tanggal:"23-Januari-2023", suhu:"27", lokasi:"Sidoarjo", kondisi:"Sejuk"},{tanggal:"17-Agustus-1945", suhu:"5", lokasi:"Kutub", kondisi:"b ajah"},{tanggal:"01-Januari-0001", suhu:"999999", lokasi:"Matahari", kondisi:"Ingat akhirat"}]})
})

app.listen(port , () =>{
    console.log(`sedang berjalan di http://localhost:${port}`)
})