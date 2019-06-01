import {Component, OnInit} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import {AdminService} from '../../services/adminService';
import {JobDtos} from '../../model/job-dtos';
import {chart, charts} from 'highcharts/highcharts.src';

const IndicatorsCore = require('highcharts/indicators/indicators');
IndicatorsCore(Highcharts);
const IndicatorZigZag = require('highcharts/indicators/zigzag');
IndicatorZigZag(Highcharts);

@Component({
  selector: 'app-admin-info2',
  templateUrl: './admin-info2.component.html',
  styleUrls: ['./admin-info2.component.css']
})
export class AdminInfo2Component implements OnInit {
  // private data = [[1559088000000, 3], [1559001600000, 2], [1559001600000, 1]];
  // private data = [[1559088000000, 3], [1559001600000, 3], [1558915200000, 2]];
  // private data = [[1559088000000, 0]];
  private data = [];




  Highcharts = Highcharts;
  chartOptions = {};

  constructor(private adminService: AdminService) {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    for (let i = 0; i < jobs.length; i++) {
      const d = jobs[i];
      this.data.push([d.date, d.count]);
    }

    this.chartOptions = {

      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'AAPL Stock Price'
      },
      tooltip: {
        shape: 'square',
        headerShape: 'callout',
        borderWidth: 0,
        shadow: false,
        positioner(width, height, point) {
          // tslint:disable-next-line:prefer-const one-variable-per-declaration
          let chart = this.chart,
            position;

          if (point.isHeader) {
            position = {
              x: Math.max(
                // Left side limit
                chart.plotLeft,
                Math.min(
                  point.plotX + chart.plotLeft - width / 2,
                  // Right side limit
                  chart.chartWidth - width - chart.marginRight
                )
              ),
              y: point.plotY
            };
          } else {
            position = {
              x: point.series.chart.plotLeft,
              y: point.series.yAxis.top - chart.plotTop
            };
          }

          return position;
        }
      },
      series: [{
        name: 'AAPL',
        data: this.data,
        responsive: {
          rules: [{
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              rangeSelector: {
                inputEnabled: false
              }
            }
          }]
        },
        tooltip: {
          valueDecimals: 2
        }
      }],

    };
  }





  ngOnInit() {
  }

}
// yAxis: [{
//   labels: {
//     align: 'left'
//   },
//   height: '80%',
//   resize: {
//     enabled: true
//   }
// }, {
//   labels: {
//     align: 'left'
//   },
//   top: '80%',
//   height: '20%',
//   offset: 0
// }],
