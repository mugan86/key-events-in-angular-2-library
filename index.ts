import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardEventsComponent } from './src/keyboard-events.component';

export * from './src/keyboard-events.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KeyboardEventsComponent
  ],
  exports: [
    KeyboardEventsComponent
  ]
})
export class KeyboardsEventsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: KeyboardsEventsModule,
      providers: []
    };
  }
}
