import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { DynamicCenteredModalService } from '../../../services/dynamic-centered-modal.service'

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
export class FormLoginComponent implements OnInit {


  formLogin!: FormGroup

  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService
  ) { }

  // TODO: improve naming - call ModalType enum as REGISTER='register', which will refer dynamic modal with with props isSigup=true/false


  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit() {
    console.log('this.formLogin.value', this.formLogin.value)
  }

  onSetModalSignup() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: true })
  }

}
