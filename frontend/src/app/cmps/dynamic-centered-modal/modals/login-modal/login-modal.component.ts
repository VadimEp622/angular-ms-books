import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { DynamicCenteredModalService } from './../../../../services/dynamic-centered-modal.service';
import { FormLoginComponent } from '../../../forms/form-login/form-login.component';
import { FormSignupComponent } from '../../../forms/form-signup/form-signup.component';

enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'login-modal',
  standalone: true,
  imports: [FormLoginComponent, FormSignupComponent, NgIf],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService
  ) {}

  @Input() isSigup!: boolean;
  @Input() isMobile: boolean = false;
}
