import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log(environment.apiUrl);
    console.log(
      'production:' +
        environment.production +
        '\n' +
        'development:' +
        environment.development +
        '\n' +
        'staging:' +
        environment.staging
    );
  }
  title = 'first-component-project';
}
