import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
declare var $;
declare var Email;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nora.Ui';
  isSendingEmail:boolean=false;
  isEmailSent:boolean=false;
  constructor(private fb:FormBuilder, private http:HttpClient){ }
  emailForm = this.fb.group({
    toEmail: ['', Validators.required],
    subjectText: ['', Validators.required],
    messageText: ['', Validators.required]
  });
  ngOninit(){
    
  }
  SendNewEmail(){
      this.isSendingEmail=true;
      setTimeout(() => {
        this.isSendingEmail=false;
        this.isEmailSent=true;
        setTimeout(() => {
          this.ResetEmailForm();
      },5000);
    },2000);
  }
  ResetEmailForm(){
    this.isSendingEmail=false;
    this.isEmailSent=false;
    this.emailForm = this.fb.group({
      toEmail: ['', Validators.required],
      subjectText: ['', Validators.required],
      messageText: ['', Validators.required]
    });
    
    this.emailForm.markAsPristine();
    this.emailForm.markAsUntouched();
  }
}
