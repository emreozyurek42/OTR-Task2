const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000; 

const list = [];


const byGender = (a, b) => {
    if (a.gender < b.gender) {
      return -1;
    }
    if (a.gender > b.gender) {
      return 1;
    }
    if (a.lastname < b.lastname) {
      return -1;
    }
    if (a.lastname > b.lastname) {
      return 1;
    }
  }

  const byDob = (a, b) => new Date(a.birthdate) - new Date(b.birthdate);

  const byName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  }

app.post('/records', (req,res) => {
    const data = {
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        gender : req.body.gender,
        color : req.body.color,
        birthdate : req.body.birthdate        
    };
    list.push(data);
    res.send(list);
});

app.get('records/gender', (req,res) => {
   const genderList = list.sort(byGender);
   res.send(genderList);
});

app.get('records/birthdate', (req,res) => {
    const birthdayList = list.sort(byDob);
    res.send(birthdayList);
 });

 app.get('records/name', (req,res) => {
    const nameList = list.sort(byName);
    res.send(nameList);
 });
 
 



app.listen(port, () => {
    console.log(`Started  on port ${port}`);
 });







