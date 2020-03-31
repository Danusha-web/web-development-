import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})

export class PasswordFormComponent{
  passform = this.fb.group({
    oldpassword : ['',[
      Validators.required,
    Validators.minLength(5)],
    Validators.pattern("12345")
  ],

    newpassword : ['',[
      Validators.required,
      Validators.minLength(6)
    ]],

    confirmpassword : ['',[ 
      Validators.required,
      Validators.minLength(6)]]
      
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.passform.value);
    console.log(this.passform.value["newpassword"])
    if(this.passform.value["newpassword"] == this.passform.value["confirmpassword"]){
      console.log("password matched ")
    }
    else{
      console.warn("password mismatch")
      alert("password mismatch")
    }


  }
  get oldpassword() { return this.passform.get('oldpassword'); }
  get newpassword() { return this.passform.get('newpassword'); }
  get confirmpassword() { return this.passform.get('confirmpassword'); }
  constructor(private fb: FormBuilder) {
    
  }
}


