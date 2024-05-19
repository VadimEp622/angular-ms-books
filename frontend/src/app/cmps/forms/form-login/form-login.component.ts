import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DynamicCenteredModalService } from '../../../services/dynamic-centered-modal.service'
import { Subscription, take } from 'rxjs';

enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnInit, OnDestroy {


  formLogin!: FormGroup

  loginSub!: Subscription

  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService,
    private authService: AuthService
  ) { }

  // TODO: improve naming - call ModalType enum as REGISTER='register', which will refer dynamic modal with with props isSigup=true/false


  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnDestroy() {
    this.loginSub?.unsubscribe()
  }

  onSubmit() {
    console.log('this.formLogin.value', this.formLogin.value)
    this.loginSub = this.authService.login(this.formLogin.value).pipe(
      take(1)
    ).subscribe()
  }

  onSetModalSignup() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: true })
  }

}
