import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsService } from './statistics/statistics.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class NgStatisticsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStatisticsModule,
      providers: [StatisticsService]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: NgStatisticsModule) {
    if (parentModule) {
      throw new Error(
        'NgStatisticsModule is already loaded. Import it in the Main Module only');
    }
  }
 }
