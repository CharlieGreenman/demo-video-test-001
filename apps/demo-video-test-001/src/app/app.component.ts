import { Component } from '@angular/core';

@Component({
  selector: 'demo-video-test-001-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'demo-video-test-001';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
