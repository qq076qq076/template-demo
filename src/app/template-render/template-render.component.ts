import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-render',
  templateUrl: './template-render.component.html',
  styleUrls: ['./template-render.component.scss'],
})
export class TemplateRenderComponent implements OnInit {
  @Input() template?: TemplateRef<any>;

  @Input() tabList?: any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.template);
  }
}
