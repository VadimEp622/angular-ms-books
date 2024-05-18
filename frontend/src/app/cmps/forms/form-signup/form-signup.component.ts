import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DynamicCenteredModalService } from '../../../services/dynamic-centered-modal.service'


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
export class FormSignupComponent implements OnInit {

  formSignup!: FormGroup

  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService
  ) { }

  ngOnInit() {
    this.formSignup = new FormGroup({
      fullname: new FormControl(null),
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit() {
    console.log('this.formSignup.value', this.formSignup.value)
  }

  onSetModalLogin() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: false })
  }

}
