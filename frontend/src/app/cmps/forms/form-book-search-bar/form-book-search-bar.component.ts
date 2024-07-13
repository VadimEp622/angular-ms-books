import { debounceTime, Observable, Subscription, take, tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicSvgComponent } from '../../dynamic-svg.component';
import { BookService } from './../../../services/book.service';
import { Router } from '@angular/router';

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

  Sub!: Subscription;

  @Input() inputClass!: string[];
  @Input() buttonStyleClass!: string[];

  constructor(private bookService: BookService, private router: Router) {}

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
    // TODO: make the query subsciption happen in the parent component search-bar + unsubscribe there of course.

    this.router.navigate(['book', 'search'], {
      queryParams: { q: this.formSearch.value.txt },
    });

    // TODO: make this work (debounced) so that when contents of "this.formSearch.value.txt" change, api call to fetch books happens,
    //    and it renders it a small modal list of 5 mini books 

    // this.Sub = this.bookService
    //   .queryBooksBySearch(this.formSearch.value.txt)
    //   .pipe(
    //     take(1),
    //     tap((data) => {
    //       console.log('form-book-search-bar return data', data);
    //     })
    //   )
    //   .subscribe();
  }
}
