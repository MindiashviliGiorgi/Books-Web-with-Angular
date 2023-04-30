import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm, RegisterForm } from "../types/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn : 'root'
})

export class AuthService {

  isAuthenticated: boolean = false;
  

  form: any;
  passwordMatched: boolean = true;



  constructor(private router : Router) {
    
  }

  isLoading: boolean = false;


  login(form : LoginForm){
    if(this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
      signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
  }
  email(auth: Auth, email: any, password: (auth: Auth, email: any, password: any) => void) {
    throw new Error("Method not implemented.");
  }
  password(auth: Auth, email: any, password: any) {
    throw new Error("Method not implemented.");
  }



  register(form : RegisterForm){
    if(this.isLoading) return;
    this.isLoading = true;
    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      }).catch((error) => {
        // An error happened.
      });
  }

}