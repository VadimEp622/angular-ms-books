import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicSvgComponent } from '../../dynamic-svg.component';

@Component({
  selector: 'form-footer-search',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicSvgComponent,
  ],
  templateUrl: './form-footer-search.component.html',
  styleUrl: './form-footer-search.component.scss',
})
export class FormFooterSearchComponent implements OnInit {
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
