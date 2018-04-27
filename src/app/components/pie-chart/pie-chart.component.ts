import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  width:string;
  height:number;

  type:string;
  dataFormat:string;
  dataSource:any;
  caption: string;
  subCaption: string;
  tableData:string;

  constructor() { }

  ngOnInit() {
    this.width = "100%";
    this.height = (window.innerHeight)*.45;
    this.type = 'pie3d';
    this.dataFormat = 'json';
    this.dataSource = {
        "chart": {
            "caption": "Age profile of website visitors",
            "subCaption": "Last Year",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Age group : $label Total visit : $datavalue",
            "theme": "ocean",
            "bgColor": "#FFFFFF",
            "bgAlpha": "50",
            "showBorder":"0",
            "borderColor": "#666666",
            "borderThickness": "2",
            "borderAlpha": "80"
        },
        "data": [
            {
                "label": "Teenage",
                "value": "1250400"
            },
            {
                "label": "Adult",
                "value": "1463300"
            },
            {
                "label": "Mid-age",
                "value": "1050700"
            },
            {
                "label": "Senior",
                "value": "491000"
            }
        ]
    };

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
    this.dataSource.chart.caption = this.caption;
    this.dataSource.chart.subCaption = this.subCaption; 
    this.dataSource.data = tempDataSource;
}
}
