import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPieChart = true;
  showColumnChart = true;
  showLineChart = true;
  showCombinationalChart = true;
}
