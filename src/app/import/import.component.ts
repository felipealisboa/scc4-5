import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ImportComponent implements OnInit {

  userInput = [];

  constructor() { }

  addToList(user) {
    this.userInput.push(user);
  }

  getUserInput() {
    return this.userInput;
  }

  clearList() {
    this.userInput = [];
    return this.userInput;
  }
  ngOnInit() {

  }



}
