import { Component, Input } from '@angular/core'
import { DynamicCenteredModalService } from './../../../../services/dynamic-centered-modal.service'


enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'login-modal',
  standalone: true,
  imports: [],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {

  constructor(
    private dynamicCenteredModalService: DynamicCenteredModalService
  ) { }


  // TODO: make a login reactive-form

  @Input() isSigup!: boolean

  onSetModal() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: true })
  }

}
