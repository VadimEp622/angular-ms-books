import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DynamicCenteredModalService } from '../../../services/dynamic-centered-modal.service'
import { AuthService } from '../../../services/auth.service'
import { Subscription, take, tap } from 'rxjs'


enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'form-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss'
})
export class FormSignupComponent implements OnInit, OnDestroy {

  formSignup!: FormGroup

  signupSub!: Subscription

  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.formSignup = new FormGroup({
      fullname: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnDestroy() {
    this.signupSub?.unsubscribe()
  }

  onSubmit() {
    // console.log('this.formSignup.value', this.formSignup.value)
    this.signupSub = this.authService.signup(this.formSignup.value).pipe(
      take(1),
      tap(() => this.dynamicCenteredModalService.closeModal())
    ).subscribe()
  }

  onSetModalLogin() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: false })
  }

}
