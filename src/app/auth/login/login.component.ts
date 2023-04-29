import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  }

  constructor() {}

  ngOnInit():void {

  }

  isLoading: boolean = false;

  submit(){
    if(this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        alert('welcome')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our record.')
      }).finally(() => (this.isLoading = false));
  }

}
