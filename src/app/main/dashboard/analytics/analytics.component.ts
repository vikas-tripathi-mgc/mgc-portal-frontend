import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { first, takeUntil } from 'rxjs/operators';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { CoreConfigService } from '@core/services/config.service';

import { colors } from 'app/colors.const';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service';
import { DashboardService } from 'app/main/dashboard/dashboard.service';
import { AnalyticsService } from './analytics.service';
import { Subject } from 'rxjs';

export interface ChartOptions {
  // Apex-Non-Axis-Chart-Series
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  colors: string[];
  legend: ApexLegend;
  labels: any;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  markers: ApexMarkers[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  states: ApexStates;
}

// Interface Chartoptions2
export interface ChartOptions2 {
  // Apex-Axis-Chart-Series
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  colors: string[];
  legend: ApexLegend;
  labels: any;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  states: ApexStates;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements OnInit {
  // Decorator

  // Private


  // Public
  public data: any;
  public currentUser: any;
  public loading = false;
  public users: User[] = [];
  public gainedChartoptions;
  public orderChartoptions;
  public avgsessionChartoptions;
  public supportChartoptions;
  public salesChartoptions;
  public isMenuToggled = true;

  // Private
  private $primary = '#0054FF';
  private $warning = '#FF9F43';
  private $info = '#00cfe8';
  private $info_light = '#1edec5';
  private $strok_color = '#b9c3cd';
  private $label_color = '#e7eef7';
  private $white = '#fff';
  private $textHeadingColor = '#5e5873';
  private _unsubscribeAll: Subject<any>;
  /**
   * Constructor
   *
   * @param {UserService} _userService
   * @param {DashboardService} _dashboardService
   * @param {CoreConfigService} _coreConfigService
   *
   */
  constructor(
    private _userService: UserService,
    private _dashboardService: DashboardService,
    private _coreConfigService: CoreConfigService,
    private _cardAnalyticsService: AnalyticsService
  ) {

    // this.revenueReportChartoptions = {
    //   chart: {
    //     height: 230,
    //     stacked: true,
    //     type: 'bar',
    //     toolbar: { show: false }
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: '17%',
    //       endingShape: 'rounded'
    //     }
    //   },
    //   colors: [colors.solid.primary, colors.solid.warning],
    //   dataLabels: {
    //     enabled: false
    //   },
    //   legend: {
    //     show: false
    //   },
    //   grid: {
    //     padding: {
    //       top: -20,
    //       bottom: -10
    //     },
    //     yaxis: {
    //       lines: { show: false }
    //     }
    //   },
    //   xaxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    //     labels: {
    //       style: {
    //         colors: this.$textMutedColor,
    //         fontSize: '0.86rem'
    //       }
    //     },
    //     axisTicks: {
    //       show: false
    //     },
    //     axisBorder: {
    //       show: false
    //     }
    //   },
    //   yaxis: {
    //     labels: {
    //       style: {
    //         colors: this.$textMutedColor,
    //         fontSize: '0.86rem'
    //       }
    //     }
    //   }
    // };

    // Subscribers Gained chart
    this.gainedChartoptions = {
      chart: {
        height: 100,
        type: 'area',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors: [this.$primary],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      tooltip: {
        x: { show: false }
      }
    };

    // this.data.type = number;
    // Order Received Chart
    this.orderChartoptions = {
      chart: {
        height: 100,
        type: 'area',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      colors: [this.$warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      series: [
        // {
        //   name: 'Orders',
        //   data: [10, 15, 8, 15, 7, 12, 8]
        // }
      ],
      tooltip: {
        x: { show: false }
      }
    };

    // Average Session Chart
    this.avgsessionChartoptions = {
      chart: {
        type: 'bar',
        height: 200,
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      colors: [
        this.$label_color,
        this.$label_color,
        this.$primary,
        this.$label_color,
        this.$label_color,
        this.$label_color
      ],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded'
        }
      },
      tooltip: {
        x: { show: false }
      }
    };

    // Support Tracker Chart
    this.supportChartoptions = {
      chart: {
        height: 290,
        type: 'radialBar',
        sparkline: {
          enabled: false
        }
      },
      plotOptions: {
        radialBar: {
          offsetY: 20,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: this.$white,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: -5,
              color: this.$textHeadingColor,
              fontSize: '1rem'
            },
            value: {
              offsetY: 15,
              color: this.$textHeadingColor,
              fontSize: '1.714rem'
            }
          }
        }
      },
      colors: [colors.solid.danger],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [colors.solid.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      labels: ['Completed Tickets']
    };

    // Sales Chart
    this.salesChartoptions = {
      chart: {
        height: 330,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: [this.$primary, this.$info],
      plotOptions: {
        radar: {
          polygons: {
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#9f8ed7', this.$info_light],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      },
      legend: {
        show: false
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      dataLabels: {
        style: {
          colors: [
            this.$strok_color,
            this.$strok_color,
            this.$strok_color,
            this.$strok_color,
            this.$strok_color,
            this.$strok_color
          ]
        }
      },
      yaxis: {
        show: false
      }
    };
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // get the currentUser details from localStorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // this._dashboardService.onCardAnalyticsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   this.data = response;
    // });

    /**
     * Get the secure api service (based on user role) (Admin Only secure API)
     * For example purpose
     */
    this.loading = true;
    this._userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.loading = false;
        this.users = users;
      });

    // Get the dashboard service data
    this._dashboardService.onApiDataChanged.subscribe(response => {
      this.data = response;
    });
  }

  /**
   * After View Init
   */
  ngAfterViewInit() {
    // Subscribe to core config changes
    this._coreConfigService.getConfig().subscribe(config => {
      // If Menu Collapsed Changes
      if (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) {
        setTimeout(() => {
          // Get Dynamic Width for Charts
          this.isMenuToggled = false;
          // this.gainedChartoptions.chart.width = this.gainedChartRef?.nativeElement.offsetWidth;
          // this.orderChartoptions.chart.width = this.orderChartRef?.nativeElement.offsetWidth;
          // this.avgsessionChartoptions.chart.width = this.avgSessionChartRef?.nativeElement.offsetWidth;
          // this.supportChartoptions.chart.width = this.supportChartRef?.nativeElement.offsetWidth;
          // this.salesChartoptions.chart.width = this.salesChartRef?.nativeElement.offsetWidth;
        }, 1000);
      }
    });
  }
}
