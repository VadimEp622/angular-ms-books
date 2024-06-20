import { Component } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // TODO: do resolver which awaits backend user data from cookie token, and then renders user page.

  // TODO: mobile footer user icon -> (?) when clicked,
  //      IF not logged in (no cookie token), open grayed-background login modal.
  //      IF logged in (has cookie token), route to user page.

  sub!: Subscription;
  user!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ user }) => {
          this.user = user;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
