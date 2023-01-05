import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoMe';
  // form;

  // constructor(private fb: FormBuilder) {
  //   this.form=fb.group({
  //     check
  //   })
  // }
  send() {
    window.alert("You don't have enough money")
  }


}
