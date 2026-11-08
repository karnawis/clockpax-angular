import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="text-center mb-6">
      <h1 class="text-5xl font-bold text-white-500 mb-8">ClockPax Game</h1>
    </header>
  `,
})
export class Header {}
