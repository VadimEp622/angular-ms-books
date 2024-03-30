import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../cmps/app-header/app-header.component';
import { LayoutService } from '../../services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dynamic-layout',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, NgClass],
  templateUrl: './dynamic-layout.component.html',
  styleUrl: './dynamic-layout.component.scss'
})
export class DynamicLayoutComponent {

  constructor(public layoutService: LayoutService) { }

}
