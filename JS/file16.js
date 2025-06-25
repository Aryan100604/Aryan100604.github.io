//promise
// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
//   });
// };

// const f2 = (x) => {
//   console.log(x + 6);
// };

// f1().then((data) => f2(data));

// const f1 = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num >= 0) {
//         resolve(5);
//       } else {
//         reject("Something Went Wrong");
//       }
//     }, 2000);
//   });
// };

// const f2 = (x) => {
//   console.log(x + 6);
// };

// f1(-2)
//   .then((data) => f2(data))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.name);
//       console.log(user.email);
//       console.log(user.address.street);
//       console.log("---------------------------");
//     });
//   })
//   .catch((err) => console.log("Error fetching the data"));

const fetchUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  users.forEach((user) => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.address.street);
    console.log("---------------------------");
  });
};
fetchUserData();
