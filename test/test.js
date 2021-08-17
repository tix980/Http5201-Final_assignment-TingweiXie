import {equal} from 'assert';

const myArray = ["qualityAssurance/quality-assurance.html","security/security.html","badExample/bad-example.html"];

describe('myArray', () => {
  it('should not contain more than three URL', () => {
    equal(myArray.length,3);
  });
});