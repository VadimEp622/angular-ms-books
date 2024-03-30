import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DynamicSvgComponent } from '../dynamic-svg.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, DynamicSvgComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() layout: string = 'main-layout';


}
