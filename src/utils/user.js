const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // vaildate data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  // check exsting user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // validate username
  if (existingUser) {
    return {
      error: "Username is already in use!",
    };
  }

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// remove user function
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// get user function
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// getUsers in room
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
