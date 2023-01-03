import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
// export class ProfileEditorComponent {


//   formData = this.fb.group({
//     name: new FormControl('', Validators.required),
//     age: new FormControl('', Validators.required),
//     gender: new FormControl('male')
//     // hobbies: new FormControl('')
//   })

//   constructor(private fb: FormBuilder) { }
// }












export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    dob: new FormControl(new Date()),
    hobbies: new FormGroup({

    })
  })

  hobbies;
  constructor(private fb: FormBuilder) {
    this.hobbies = fb.group({
      basketball: false,
      swimming: false,
      football: false
    })

    console.log("FirstName", this.profileForm.controls.firstName)

  }

  submit() {
    window.alert("You've been register")
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  log() {
    console.log(this.profileForm.controls.firstName)
  }

}
