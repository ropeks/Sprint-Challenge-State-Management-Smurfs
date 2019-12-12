const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let team = [
  {
    name: 'Petar',
    age: 20,
    height: '185cm',
    id: 0
  }
];
server.get('/team', (req, res) => {
  res.json(team);
});
let teamMemberId = team.length;

server.post('/team', (req, res) => {
  const { name, age, height } = req.body;
  const newMember = { name, age, height, id: teamMemberId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did teamed! Name/Age/Height are all required to create a team member in the team DB.',
      res
    );
  }
  const findMemberByName = member => {
    return member.name === name;
  };
  if (team.find(findMemberByName)) {
    return sendUserError(
      `Ya gone did teamed! ${name} already exists in the team DB.`,
      res
    );
  }

  team.push(newMember);
  teamMemberId++;
  res.json(team);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
