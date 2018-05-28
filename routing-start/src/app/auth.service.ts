export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (res, rej) => {
        setTimeout(() => {
          res(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }
  login() {
    console.log('logged in');
    this.loggedIn = true;
  }

  logout() {
    console.log('logged out');
    this.loggedIn = false;
  }
}
