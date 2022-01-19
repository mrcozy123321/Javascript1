class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('Registrerar användaren');
    console.log(user);
  }
  static signIn(email, password) {
    console.log(`loggar in användaren med ${email} och ${password}.`);
  }
}

// const userService = new UserService('http://localhost')

// userService.signUp({firstName: 'Daniel', lastName: 'Mrkoci'})
// userService.signIn('daniel@wiklunds.nu', 'Bytmig123')

UserService.signUp({firstName: 'Daniel', lastName: 'Mrkoci'})
UserService.signIn('daniel@wiklunds.nu', 'Bytmig123')