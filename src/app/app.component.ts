import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-template';
  tabList = [{ name: 'itema' }, { name: 'itemb' }, { name: 'itemc' }];
}
