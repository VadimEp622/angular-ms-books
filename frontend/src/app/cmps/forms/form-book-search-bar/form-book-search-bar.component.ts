import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicSvgComponent } from '../../dynamic-svg.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'form-book-search-bar',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DynamicSvgComponent,
    NgClass,
  ],
  templateUrl: './form-book-search-bar.component.html',
  styleUrl: './form-book-search-bar.component.scss',
})
export class FormBookSearchBarComponent implements OnInit {
  // TODO: improve abstraction of form

  formSearch!: FormGroup;

  @Input() inputClass!: string[];
  @Input() buttonStyleClass!: string[];

  ngOnInit() {
    this.formSearch = new FormGroup({
      txt: new FormControl(null),
    });
  }

  getButtonStyleClass() {
    return [this.getDefaultButtonStyleClass(), this.buttonStyleClass].join(' ');
  }

  getDefaultButtonStyleClass() {
    return 'br-tl-0 br-bl-0 pd-0 height-full flex justify-center hover-not-allowed';
  }

  onSubmit() {
    console.log('hi from submit', this.formSearch.value);
    // TODO: redirect to book/search?q=
  }
}
