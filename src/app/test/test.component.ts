import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // formdata = new FormGroup({
  //   userName: new FormControl('Nyan')
  // })
  requiredForm;
  constructor(private fb: FormBuilder) {
    this.requiredForm = this.fb.group({
      name: new FormControl('', Validators.required)
    })
  }
}
