import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username = '';
    password = '';
    tel: number ;
  constructor(
    public afAuth: AngularFireAuth,
     public user: UserService,
     public router: Router,
     public loadingctr: LoadingController,
             private db: AngularFireDatabase
                      ) {
                        this.afAuth.authState.subscribe((auth) => {
                          // this.authState = auth;
                        });
      }

  ngOnInit() {
  }
   loginfb() {
     const provider = new firebase.auth.FacebookAuthProvider();
       firebase.auth().signInWithRedirect(provider).then(() => {
           firebase.auth().getRedirectResult().then((result) => {
              alert(JSON.stringify(result));
            }).catch(function(error) {
                alert(JSON.stringify(error));
               });
           });
      }
      googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.socialSignIn(provider);
            }
          private socialSignIn(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
          .then((credential) =>  {
              // this.authState = credential.user;
              this.router.navigate(['/accuiel']);
                      })
          .catch(error => console.log(error));
                }
      // Returns true if user is logged in
//  get authenticated(): boolean {
//   return this.authState !== null;
// }

  async login() {
      const { username, password , tel } = this;
         try {
          // kind of a hack.
             const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password);
          if (res.user) {
                         this.user.setUser({username, tel, uid: res.user.uid});
                         this.router.navigate(['/accuiel']);
                         }

             } catch (err) {
                            console.dir(err);
                           if (err.code === 'auth/user-not-found') {
                                console.log('User not found');
                              }
                            }
                    }
}

