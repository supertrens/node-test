module.exports.add = (a, b) => a + b;

module.exports.square = number => number * number;

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];

  return user;
};