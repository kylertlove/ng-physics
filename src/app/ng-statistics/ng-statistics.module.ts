import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsService } from './statistics/statistics.service';
import { ZTable } from './models/zTable';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class NgStatisticsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStatisticsModule,
      providers: [StatisticsService, ZTable]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: NgStatisticsModule) {
    if (parentModule) {
      throw new Error(
        'NgStatisticsModule is already loaded. Import it in the Main Module only');
    }
  }
 }
