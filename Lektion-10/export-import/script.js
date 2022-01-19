import UserService from './UserService.js'
import User from './User.js'

UserService.signIn('daniel@mail.com', 'Bytmig123')

const user1 = new User('Daniel', 'Mrkoci')
console.log(user1);
