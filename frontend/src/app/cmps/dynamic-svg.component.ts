import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { DynamicSvgService } from '../services/dynamic-svg.service';

@Component({
  selector: 'dynamic-svg',
  standalone: true,
  imports: [],
  template: '<div #svgContainer class="flex"></div>'
})
export class DynamicSvgComponent {
  @Input() svgPath!: string;
  @ViewChild('svgContainer', { static: true }) svgContainer!: ElementRef;

  constructor(private dynamicSvgService: DynamicSvgService, private renderer: Renderer2) { }

  ngOnInit() {
    this.loadSvg()
  }

  loadSvg() {
    this.dynamicSvgService.loadSvg(this.svgPath).subscribe(svgContent => {
      this.renderer.setProperty(this.svgContainer.nativeElement, 'innerHTML', svgContent);
    })
  }
}
