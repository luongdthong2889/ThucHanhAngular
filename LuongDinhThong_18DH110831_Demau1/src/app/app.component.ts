import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LuongDinhThong_18DH110831_Demau1';
  loadedFeature = 'laptop';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    }
}
