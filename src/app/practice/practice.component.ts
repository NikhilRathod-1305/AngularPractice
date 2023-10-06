import { Component } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent {
  enableTable: boolean = environment.enableTable;
}
