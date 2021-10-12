let users = [];

export const index = (req, res) => {
  res.send(users);
};

export const store = (req, res) => {
  res.send("store");
};

export const show = (req, res) => {
  // const { id } = req.params;
  // const getUesr = users.find((user) => user.id === id);
  // res.send(getUesr);
  res.send("show");
};

export const update = (req, res) => {
  // const { id } = req.params;

  // const { firstName, lastName, age } = req.body;

  // const user = users.find((user) => user.id === id);

  // if (firstName) {
  //   user.firstName = firstName;
  // }
  // if (lastName) {
  //   user.lastName = lastName;
  // }
  // if (age) {
  //   user.age = age;
  // }

  // res.send(`User with the id ${user.id} updated`);
  res.send("update");
};

export const destroy = (req, res) => {
  // const { id } = req.params;

  // users = users.filter((user) => user.id !== id);

  // res.send(`User with id ${id} deleted`);
  res.send("destroy");
};
