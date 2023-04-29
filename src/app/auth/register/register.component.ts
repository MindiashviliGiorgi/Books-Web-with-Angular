import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: '',
  }

  passwordMatched: boolean = true;

  isLoading:boolean = false;

  submit(){
    if(this.isLoading) return;
    this.isLoading = true;
    if(this.form.password != this.form.confirm_password){
      this.passwordMatched = false;
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false));
  }
}
