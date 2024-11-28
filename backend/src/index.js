const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tarefas = [];
let idCounter = 1;

// Endpoints
app.post('/tarefas', (req, res) => {
  const { descricao, status } = req.body;
  const novaTarefa = { id: idCounter++, descricao, status };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;
  const tarefa = tarefas.find((t) => t.id === parseInt(id));

  if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });

  tarefa.descricao = descricao || tarefa.descricao;
  tarefa.status = status || tarefa.status;
  res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  tarefas = tarefas.filter((t) => t.id !== parseInt(id));
  res.status(204).end();
});

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});
