import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
angularForm = new FormGroup({
  name: new FormControl(),
  phone: new FormControl(),
  message : new FormControl()

});
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
     this.angularForm = this.fb.group({name: ['', Validators.required], phone: ['', Validators.required], message: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

}
