const Puppy = require('../../models/style');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const styles = await Style.find({});
  res.status(200).json(styles);
}

async function show(req, res) {
  const style = await Style.findById(req.params.id);
  res.status(200).json(style);
}

async function create(req, res) {
  const style = await Style.create(req.body);
  res.status(201).json(style);
}

async function deleteOne(req, res) {
  const deleteStyle = await Style.findByIdAndRemove(req.params.id);
  res.status(200).json(deleteStyle);
}

async function update(req, res) {
  const updateStyle = await Style.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updateStyle);
}