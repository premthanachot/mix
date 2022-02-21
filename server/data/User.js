import bcrypt from "bcryptjs"

const user = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
  },
  {
    name: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("123456",10),
  },
];

export default user;
