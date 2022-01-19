export default class UserService {
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