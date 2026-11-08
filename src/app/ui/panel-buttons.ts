import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-panel-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="exit m-1 p-3 bg-slate-900 hover:bg-gray-400 rounded-lg flex items-center justify-center text-white-800 z-40"
      (click)="pressed.emit()"
    >
      {{ name() }}
    </button>
  `,
})
export class PanelButtons {
  readonly name = input.required<string>();
  readonly pressed = output<void>();
}
