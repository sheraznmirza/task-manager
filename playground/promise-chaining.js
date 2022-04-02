require("../src/db/mongoose");

const User = require("../src/models/user");

// User.findByIdAndUpdate("61a088321c8061ff28d0eecc", { age: 24 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 24 });
//   })
//   .then((user2) => {
//     console.log("ya tis is it", user2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user, count };
};

updateAgeAndCount("61a0c010df907f71f5508f07", 24)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
