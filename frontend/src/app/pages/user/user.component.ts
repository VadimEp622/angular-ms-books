import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
  // TODO: do resolver which awaits backend user data from cookie token, and then renders user page.

  // TODO: mobile footer user icon -> (?) when clicked,
  //      IF not logged in (no cookie token), open grayed-background login modal.
  //      IF logged in (has cookie token), route to user page.

  userSub!: Subscription;

  logoutSub!: Subscription;
  user!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.route.data
      .pipe(
        tap(({ user }) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    if (this.logoutSub) this.logoutSub.unsubscribe();
  }

  onLogout(loggedInUser: any) {
    this.logoutSub = this.authService.logout(loggedInUser).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
}
