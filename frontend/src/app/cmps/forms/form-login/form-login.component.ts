import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicCenteredModalService } from '../../../services/dynamic-centered-modal.service';
import { Subscription, take, tap } from 'rxjs';
import { Router } from '@angular/router';

enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent implements OnInit, OnDestroy {
  @Input() isMobile!: boolean;

  formLogin!: FormGroup;

  loginSub!: Subscription;

  constructor(
    private router: Router,
    private dynamicCenteredModalService: DynamicCenteredModalService,
    private authService: AuthService
  ) {}

  // TODO: improve naming - call ModalType enum as REGISTER='register', which will refer dynamic modal with with props isSigup=true/false
  // TODO: add logging out
  // TODO: add some form success promt to login/signup

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }

  ngOnDestroy() {
    this.loginSub?.unsubscribe();
  }

  onSubmit() {
    // console.log('this.formLogin.value', this.formLogin.value)
    this.loginSub = this.authService
      .login(this.formLogin.value)
      .pipe(
        take(1),
        tap(() => {
          this.dynamicCenteredModalService.closeModal();
          if (this.isMobile) {
            this.router.navigate(['user']);
          }
        })
      )
      .subscribe();
  }

  onSetModalSignup() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, {
      isSigup: true,
    });
  }
}
