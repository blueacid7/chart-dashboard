import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {
  width:string;
  height:number;

  type:string;
  dataFormat:string;
  dataSource:any;
  constructor() { }

  ngOnInit() {

    this.width = "100%";
    this.height = 380;
    this.type = 'column2d';
    this.dataFormat = 'json';
    this.dataSource = {
      "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "xAxisName": "Stores",
          "yAxisName": "Amount {br}(In USD)" ,
          "numberPrefix": "$",
          "bgColor": "#DDDDDD",
          "bgAlpha": "50",
          "theme":"ocean",
          "showBorder":"1",
          "borderColor": "#666666",
          "borderThickness": "2",
          "borderAlpha": "80",
          "canvasbgColor": "#DDDDDD",
          "canvasbgAlpha": "10",
      },
      "data": [
          {
              "label": "Bakersfield Central",
              "value": "880000"
          },
          {
              "label": "Garden Groove harbour",
              "value": "730000"
          },
          {
              "label": "Los Angeles Topanga",
              "value": "590000"
          },
          {
              "label": "Compton-Rancho Dom",
              "value": "520000"
          },
          {
              "label": "Daly City Serramonte",
              "value": "330000"
          }
      ]
    };
  }

}
