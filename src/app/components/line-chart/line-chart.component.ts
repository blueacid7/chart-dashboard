import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  width:string;
  height:number;

  type:string;
  dataFormat:string;
  dataSource:any;
  constructor() { }

  ngOnInit() {
    this.width = "100%";
    this.height = 380;
    this.type = 'area2d';
    this.dataFormat = 'json';
    this.dataSource = {
      "chart": {
          "caption": "Total footfall in Bakersfield Central",
          "subCaption": "Last week",
          "xAxisName": "Day",
          "yAxisName": "No. of Visitors",
          "lineThickness": "2",
          "paletteColors": "#0075c2",
          "baseFontColor": "#333333",
          "baseFont": "Helvetica Neue,Arial",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "showBorder": "1",
          "borderColor": "#666666",
          "borderThickness": "2",
          "borderAlpha": "80",
          "bgColor": "#DDDDDD",
          "showShadow": "0",
          "canvasBgColor": "#DDDDDD",
          "canvasbgAlpha": "10",          
          "canvasBorderAlpha": "0",
          "divlineAlpha": "100",
          "divlineColor": "#999999",
          "divlineThickness": "1",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "showXAxisLine": "1",
          "xAxisLineThickness": "1",
          "xAxisLineColor": "#999999",
          "showAlternateHGridColor": "0",
      },
      "data": [
          {
              "label": "Mon",
              "value": "15123"
          },
          {
              "label": "Tue",
              "value": "14233"
          },
          {
              "label": "Wed",
              "value": "23507"
          },
          {
              "label": "Thu",
              "value": "9110"
          },
          {
              "label": "Fri",
              "value": "15529"
          },
          {
              "label": "Sat",
              "value": "20803"
          },
          {
              "label": "Sun",
              "value": "19202"
          }
      ],
      "trendlines": [
          {
              "line": [
                  {
                      "startvalue": "18500",
                      "color": "#1aaf5d",
                      "displayvalue": "Average{br}weekly{br}footfall",
                      "valueOnRight": "1",
                      "thickness": "2"
                  }
              ]
          }
      ]
    };
  }

}
