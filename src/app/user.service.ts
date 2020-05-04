import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';


// tslint:disable-next-line:class-name
interface user {
username: string;
tel: number;
uid: string;
}

@Injectable()
export class UserService {
private user: user;
  uid: any;

constructor(private afAuth: AngularFireAuth) {

}

// tslint:disable-next-line:no-shadowed-variable
setUser(user: user) {
this.user = user;
}

getUsername(): string {
return this.user.username;
}

reAuth(username: string, password: string) {
return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username  , password));
}
updatePassword(newpassword: string) {
return this.afAuth.auth.currentUser.updatePassword(newpassword);
}

updateEmail(newemail: string) {
return this.afAuth.auth.currentUser.updateEmail(newemail);
}

async isAuthenticated() {
if (this.user) { return true; }

// tslint:disable-next-line:no-shadowed-variable
const user = await this.afAuth.authState.pipe(first()).toPromise();
return true;
}

getUID(): string {
return this.user.uid;
}

send() {
// tslint:disable-next-line:no-shadowed-variable
const auth = firebase.auth();
const emailAddress = 'agharsaifeddine@gmail.com';
auth.sendPasswordResetEmail(emailAddress).then(function() {
alert('Email Sent');
}).catch(function(error) {
// error .
});
}
}
