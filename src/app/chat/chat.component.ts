import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }


    onSubmit() {
      this.submitted = true;

      if(this.messageForm.invalid) {
        return;
      }
    }

    ngOnInit() {
    }
  }
