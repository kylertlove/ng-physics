import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalProbabilityService } from './services/conditional-probability.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class NgPhysicsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgPhysicsModule,
      providers: [
        ConditionalProbabilityService
      ]
    };
  }
  constructor (@Optional() @SkipSelf() parentModule: NgPhysicsModule) {
    if (parentModule) {
      throw new Error(
        'NgPhysicsModule is already loaded. Import it in the Main Module only');
    }
  }
}
