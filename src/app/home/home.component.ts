import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(){}
private _snackBar = inject(MatSnackBar);
display(){
  this._snackBar.open('Email has been sent successfully','Close');
}
}
