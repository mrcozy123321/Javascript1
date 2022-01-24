import User from '../models/User.js'

export default class UserService {
  // constructor() {}

  static signUp(userObj) {
    const newUser = new User(userObj.firstName, userObj.lastName, userObj.email, userObj.password)
    newUser.lastName = 'Mrkoci'
    console.log('sending user to database');
    console.log(newUser);
  }

  static signIn(email, password) {
    console.log('signing in user');
    console.log(email, password);
  }
}