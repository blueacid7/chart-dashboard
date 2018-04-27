import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {
    width:string;
    height:number;
    xAxisLabel: string;
    yAxisLabel: string;
    caption: string;
    subCaption: string;
    type:string;
    dataFormat:string;
    dataSource:any;
    tableData:string;
    constructor() { }

  ngOnInit() {

    this.width = "100%";
    this.height = (window.innerHeight)*.45;
    this.type = 'column2d';
    this.dataFormat = 'json';
    this.dataSource = {
      "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Top 5 stores in last month by revenue",
          "xAxisName": "Stores",
          "yAxisName": "Amount {br}(In USD)" ,
          "numberPrefix": "$",
          "bgColor": "#FFFFFF",
          "bgAlpha": "50",
          "theme":"ocean",
          "showBorder":"0",
          "borderColor": "#666666",
          "borderThickness": "2",
          "borderAlpha": "80",
          "canvasbgColor": "#FFFFFF",
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
    this.xAxisLabel = this.dataSource.chart.xAxisName;
    this.yAxisLabel = this.dataSource.chart.yAxisName;
    this.caption = this.dataSource.chart.caption;
    this.subCaption = this.dataSource.chart.subCaption;
    this.tableData = JSON.stringify(this.dataSource.data, null, "\t"); 
  }

    saveConfiguration(){
        try{
            var tempDataSource = JSON.parse(this.tableData);
        }
        catch{
            alert("Can't Parse the JSON Provided");
            return;
        }
        this.dataSource.chart.xAxisName = this.xAxisLabel;
        this.dataSource.chart.yAxisName = this.yAxisLabel ;
        this.dataSource.chart.caption = this.caption;
        this.dataSource.chart.subCaption = this.subCaption; 
        this.dataSource.data = tempDataSource;
    }
}
