import { hasNumber } from "../functions/Functions.js";

export default class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this._lastName = lastName;
    this.email = email;
    this.password = password;
    this._id = Date.now().toString()
  }
  get id() {
    return this._id
  }
  set id(_val) {
    console.log('cant set id');
    return 
  }
  get fullName() {
    return this.firstName + ' ' + this._lastName
  }
  set lastName(_name) {
    if(!hasNumber(_name)) {
      this._lastName = _name
    }
    else {
      console.log('Error name contains numbers');
    }
  }
}