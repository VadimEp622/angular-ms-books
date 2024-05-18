import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'


enum ModalType {
  LOGIN = 'login',
}

interface ModalProps {
  [key: string]: boolean
}

interface ActiveModal {
  modalType: ModalType | null,
  props?: ModalProps
}

@Injectable({
  providedIn: 'root'
})
export class DynamicCenteredModalService {

  private _activeModal$ = new BehaviorSubject<ActiveModal>({ modalType: null })
  public activeModal$ = this._activeModal$.asObservable()

  constructor() { }


  setModal(modalType: ModalType | null, props?: ModalProps) {
    this._activeModal$.next({ modalType, props })
  }

  closeModal() {
    this._activeModal$.next({ modalType: null })
  }
}
