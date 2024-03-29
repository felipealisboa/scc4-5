import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone:  ['', Validators.required],
      cpf:  ['', Validators.required],
      address: ['', Validators.required],
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
