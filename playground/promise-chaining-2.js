require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("61a09219b1b1043777957d76")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ Completed: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ Completed: false });
  return count;
};

deleteTaskAndCount("61a091fab1b1043777957d74")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
