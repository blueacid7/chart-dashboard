import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import * as FusionCharts from 'fusioncharts'
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CombinationalChartComponent } from './components/combinational-chart/combinational-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    ColumnChartComponent,
    LineChartComponent,
    CombinationalChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme, OceanTheme),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
