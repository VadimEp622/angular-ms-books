import { Component } from '@angular/core';
import { DynamicSvgComponent } from '../dynamic-svg.component';

@Component({
  selector: 'logo',
  standalone: true,
  imports: [DynamicSvgComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {}
