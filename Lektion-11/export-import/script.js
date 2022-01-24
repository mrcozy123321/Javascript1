// import User from './models/User.js'
import UserService from './services/UserService.js'
import { validate as va } from './functions/Functions.js'

// const user = new User('Daniel', 'Mrkoci', 'daniel@mail.com', 'BytMig123')

const user = {
  firstName: 'Daniel',
  lastName: 'Mrkoci',
  email: 'daniel@mail.com',
  password: 'BytMig123'
}

if(va(user)) {
  UserService.signUp(user)
}

UserService.signIn('daniel@mail.com', 'BytMig123')