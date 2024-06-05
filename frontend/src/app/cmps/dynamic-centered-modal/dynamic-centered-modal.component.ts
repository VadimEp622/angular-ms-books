import { JsonPipe, NgClass, NgComponentOutlet, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { LoginModalComponent } from './modals/login-modal/login-modal.component'
import { DynamicCenteredModalService } from '../../services/dynamic-centered-modal.service'

enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'dynamic-centered-modal',
  standalone: true,
  imports: [NgIf, JsonPipe, NgClass, LoginModalComponent, NgComponentOutlet],
  templateUrl: './dynamic-centered-modal.component.html',
  styleUrl: './dynamic-centered-modal.component.scss'
})
export class DynamicCenteredModalComponent {

  @Input() activeModal!: any | null


  constructor(private dynamicCenteredModalService: DynamicCenteredModalService) { }

  getModalContainerClass(activeModal: any) {
    return activeModal.modalType ? ['active'] : []
  }

  getCmp(modal: any) {
    switch (modal.modalType) {
      case ModalType.LOGIN:
        return LoginModalComponent

      default:
        return null
    }
  }

  onCloseModal() {
    this.dynamicCenteredModalService.closeModal()
  }

}
