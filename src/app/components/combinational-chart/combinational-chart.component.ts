import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combinational-chart',
  templateUrl: './combinational-chart.component.html',
  styleUrls: ['./combinational-chart.component.css']
})
export class CombinationalChartComponent implements OnInit {
  width:string;
  height:number;

  type:string;
  dataFormat:string;
  dataSource:any;
  xAxisLabel: string;
  yAxisLabel: string;
  caption: string;
  subCaption: string;
  tableData: string;
  constructor() { }

  ngOnInit() {
    
    this.width = "100%";
    this.height = (window.innerHeight)*.45;
    this.type = 'mscombi2d';
    this.dataFormat = 'json';
    this.dataSource = {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Sales analysis of last year",
            "xAxisName": "Month",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "showValues": "0",
            "paletteColors": "#0075c2,#1aaf5d,#f2c500",
            "showCanvasBorder": "0",
            "canvasBgColor": "#ffffff",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "showAlternateHGridColor": "0",
            "usePlotGradientColor": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "legendBgColor": "#ffffff",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "legendItemFontSize": "10",
            "legendItemFontColor": "#666666",
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
        "categories": [
            {
                "category": [
                    {
                        "label": "Jan"
                    },
                    {
                        "label": "Feb"
                    },
                    {
                        "label": "Mar"
                    },
                    {
                        "label": "Apr"
                    },
                    {
                        "label": "May"
                    },
                    {
                        "label": "Jun"
                    },
                    {
                        "label": "Jul"
                    },
                    {
                        "label": "Aug"
                    },
                    {
                        "label": "Sep"
                    },
                    {
                        "label": "Oct"
                    },
                    {
                        "label": "Nov"
                    },
                    {
                        "label": "Dec"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesName": "Actual Revenue",
                "showValues": "1",
                "data": [
                    {
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "15000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "25000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "23000"
                    }
                ]
            },
            {
                "seriesName": "Projected Revenue",
                "renderAs": "line",
                "data": [
                    {
                        "value": "15000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "17000"
                    },
                    {
                        "value": "18000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "19000"
                    },
                    {
                        "value": "20000"
                    },
                    {
                        "value": "21000"
                    },
                    {
                        "value": "22000"
                    },
                    {
                        "value": "23000"
                    }
                ]
            },
            {
                "seriesName": "Profit",
                "renderAs": "area",
                "data": [
                    {
                        "value": "4000"
                    },
                    {
                        "value": "5000"
                    },
                    {
                        "value": "3000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "7000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "4000"
                    },
                    {
                        "value": "1000"
                    },
                    {
                        "value": "8000"
                    },
                    {
                        "value": "2000"
                    },
                    {
                        "value": "7000"
                    }
                ]
            }
        ]
    };

    this.xAxisLabel = this.dataSource.chart.xAxisName;
    this.yAxisLabel = this.dataSource.chart.yAxisName;
    this.caption = this.dataSource.chart.caption;
    this.subCaption = this.dataSource.chart.subCaption;
   
    this.tableData = JSON.stringify({
        categories: this.dataSource.categories,
        dataset: this.dataSource.dataset 
    }, null, "\t"); 
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
        this.dataSource.categories = tempDataSource.categories;
        this.dataSource.dataset = tempDataSource.dataset;        
    }
}
