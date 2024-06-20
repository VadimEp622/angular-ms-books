import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppHeaderComponent } from '../../cmps/app-header/app-header.component';
import { AppMainMenuComponent } from '../../cmps/app-main-menu/app-main-menu.component';
import { LayoutService } from '../../services/layout.service';
import { RoutingService } from './../../services/routing.service';
import { MainMenuService } from './../../services/main-menu.service';
import { DynamicCenteredModalComponent } from '../../cmps/dynamic-centered-modal/dynamic-centered-modal.component';
import { DynamicCenteredModalService } from './../../services/dynamic-centered-modal.service';
import { AppFooterComponent } from '../../cmps/app-footer/app-footer.component';

@Component({
  selector: 'dynamic-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    NgIf,
    AsyncPipe,
    ProgressSpinnerModule,
    AppHeaderComponent,
    AppMainMenuComponent,
    DynamicCenteredModalComponent,
    AppFooterComponent,
  ],
  templateUrl: './dynamic-layout.component.html',
  styleUrl: './dynamic-layout.component.scss',
})
export class DynamicLayoutComponent implements OnInit {
  isMenuOpen$!: Observable<boolean>;
  isRouteLoading$!: Observable<boolean>;

  activeModal$!: Observable<any>;

  constructor(
    public layoutService: LayoutService,
    public routingService: RoutingService,
    public mainMenuService: MainMenuService,
    public dynamicCenteredModalService: DynamicCenteredModalService
  ) {}

  ngOnInit() {
    this.isMenuOpen$ = this.mainMenuService.isMenuOpen$;
    this.isRouteLoading$ = this.routingService.isRouteLoading$;
    this.activeModal$ = this.dynamicCenteredModalService.activeModal$;
  }
}
