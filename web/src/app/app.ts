import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule , FormsModule , ReactiveFormsModule  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 form: FormGroup;
  submittedData: any[] = [];

  latestFormData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      birthPlace: ['', Validators.required],
      time: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formValue = this.form.value;

      // Push to table
      this.submittedData.push(formValue);

      // Store latest data for WhatsApp
      this.latestFormData = formValue;

      // Reset form
      this.form.reset();
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  deleteRow(index: number) {
    this.submittedData.splice(index, 1);
  }

 openWhatsApp() {
  const phoneNumber = '919302463571'; // Your WhatsApp number
  const message = `How can I help you?`;
  window.open(`https://wa.me/${9302463571}?text=${encodeURIComponent(message)}`, '_blank');
}
}