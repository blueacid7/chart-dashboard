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


  constructor() { }

  ngOnInit() {
    this.width = "100%";
    this.height = 380;
    this.type = 'pie3d';
    this.dataFormat = 'json';
    this.dataSource = {
        "chart": {
            "caption": "Age profile of website visitors",
            "subcaption": "Last Year",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Age group : $label Total visit : $datavalue",
            "theme": "ocean",
            "bgColor": "#DDDDDD",
            "bgAlpha": "50",
            "showBorder":"1",
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
  }

}
