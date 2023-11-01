import schema from "./user.model.js";
export async function AddMovie(req, res) {
  try {
    const { ...Movie } = req.body;
    res.status(201).send(schema.create({ ...Movie }));
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function getMovie(req, res) {
  let Movie = await schema.find();
  res.status(200).send(Movie);
}

export async function getDetails(req, res) {
  const { id } = req.params;
  let Movie = await schema.findOne({ _id: id });
  res.status(200).send(Movie);
}

export function deleteMovie(req, res) {
  const { id } = req.params;
  const data = schema.deleteOne({ _id: id });
  data
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}

export async function editDetails(req, res) {
  const { id } = req.params;
  console.log(id);
  const { ...movie } = req.body;
  await schema.updateOne({ _id: id }, { $set: { ...movie } });

  res.status(201).send("updated")
}
