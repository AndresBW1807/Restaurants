import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit{

  nutritionalForm!: FormGroup;
  mealTypes: any[] = []
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.mealTypes = [
      { label: 'Desayuno', value: 'desayuno' },
      { label: 'Almuerzo', value: 'almuerzo' }
    ];
    this.form();
  }

  onSubmit(){
    console.log(this.nutritionalForm)
  }

  form(){
    this.nutritionalForm = this.fb.group({
      mealType: ['', Validators.required],
      data: ['', Validators.required],
    });
  }
}
