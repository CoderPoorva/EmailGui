import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data={
    to:"",
    subject:"",
    message:""
  }

doSubmit(){
  alert('Form submitted successfully!');
  console.log(this.data);
}
}
