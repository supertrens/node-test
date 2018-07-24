const expect = require('expect');
const utils = require('./utils');

it('should add two numbers' , () => {
  let res = utils.add(33,11);
  
  expect(res).toBe(44).toBeA('number');  

});

it('should square a number' , () => {
  let res = utils.square(5);

  expect(res).toBe(25).toBeA('number');
});

it('should verify first and last name are set' , () => {
  let user = utils.setName({} , 'Ernst Pierre');

  expect(user).toInclude({
    firstName : 'Ernst',
    lastName: 'Pierre',
  });
});