const Client = require('../../models/client');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const clients = await Client.find({});
  res.status(200).json(clients);
}

async function show(req, res) {
  const client = await Client.findById(req.params.id);
  res.status(200).json(client);
}

async function create(req, res) {
  const client = await Client.create(req.body);
  res.status(201).json(client);
}

async function deleteOne(req, res) {
  const deleteClient = await Client.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteClient);
}

async function update(req, res) {
  const updateClient = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updateClient);
}