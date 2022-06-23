//! collection - users
const usersExample = {
  _id: "gd2145sa24176gsda598dgags24ggd",
  name: "Ofir",
  email: "ofir.cohen22@gmail.com",
  blogs: ["blogID 1", "blogID 2", "..."],
};

//! collection - blogs
const blogPostExample = {
  _id: "g1245d435sd574890dfd680adas96d",
  author: "user ID",
  title: "Everybody",
  text: "bla bla bla",
  comments: ["comment ID 1", "comment ID 2", "..."],
};

//! collection - comments
const commentExample = {
  _id: "s23454r2345sd4",
  timeStamp: "15:21:12 5,june,2021",
  text: "bla bla bla",
  blogID: "8s574474fdh8905487s5gfs6798g96d",
  userID: "g1245ds45sdf7890d6sg780gdas96d",
};