const library = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text } = req.body;
    library.push({ id, text });
    id++;
    res.status(200).send(library);
  },

  read: (req, res) => {
    res.status(200).send(library);
  },
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const entryIndex = library.findIndex(entry => entry.id == updateID);
    let entry = library[entryIndex];

    library[entryIndex] = {
      id: entry.id,
      text: text || entry.text,
      time: message.time
    };
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const deleteID = req.params.id;
    entryIndex = library.findIndex(entry => entry.id == deleteID);
    library.splice(entryIndex, 1);
    console.log(req.params.id);
    console.log(library);
    res.status(200).send(library);
  }
};
