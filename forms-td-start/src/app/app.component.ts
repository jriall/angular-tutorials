import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User {
  username: string;
  email: string;
  secretQuestion: string;
  answer: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  score = 3000;
  timer: any;
  increased = false;
  defaultQuestion = 'teacher';
  genders = ['male', 'female'];
  user: User = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

  increase() {
    if (!this.increased) {
      this.increaseOldToNew(this.score, 4000);
    }

    this.increased = true;
  }

  increaseOldToNew(oldNum: number, newNum: number) {
    const difference = newNum - oldNum;
    const interval = difference / 500;
    for (let i = 0; i < 500; i++) {
      setTimeout(() => {
        this.score += interval;
      }, interval * i);
    }
  }
}
