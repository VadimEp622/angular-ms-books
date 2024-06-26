import { Observable, Subscription } from 'rxjs'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { AsyncPipe, NgIf } from '@angular/common'
import { DynamicCenteredModalService } from './../../../../services/dynamic-centered-modal.service'
import { AuthService } from './../../../../services/auth.service'

enum ModalType {
  LOGIN = 'login',
}

@Component({
  selector: 'profile-action-menu',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './profile-action-menu.component.html',
  styleUrl: './profile-action-menu.component.scss'
})
export class ProfileActionMenuComponent implements OnInit, OnDestroy {

  // TODO: add login on page load

  loggedInUser$!: Observable<any>

  logoutSub!: Subscription

  constructor(
    private authService: AuthService,
    private dynamicCenteredModalService: DynamicCenteredModalService
  ) { }

  ngOnInit() {
    this.loggedInUser$ = this.authService.loggedInUser$
  }

  ngOnDestroy(): void {
    if (this.logoutSub) this.logoutSub.unsubscribe()
  }

  onLogin() {
    this.dynamicCenteredModalService.setModal(ModalType.LOGIN, { isSigup: false })
  }

  onLogout(loggedInUser: any) {
    this.logoutSub = this.authService.logout(loggedInUser).subscribe()
  }


}
