import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DynamicSvgComponent } from '../../dynamic-svg.component';

@Component({
  selector: 'form-header-search',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicSvgComponent,
  ],
  templateUrl: './form-header-search.component.html',
  styleUrl: './form-header-search.component.scss',
})
export class FormHeaderSearchComponent implements OnInit {
  formSearch!: FormGroup;

  ngOnInit() {
    this.formSearch = new FormGroup({
      txt: new FormControl(null),
    });
  }

  onSubmit() {
    console.log('hi from submit', this.formSearch.value);
  }
}
