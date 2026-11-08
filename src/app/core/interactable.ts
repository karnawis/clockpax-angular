import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { InteractableDef, VerbSet } from '../data/game.types';

@Component({
  selector: 'app-interactable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-lg shadow">
      <div>
        <div
          class="interactable"
          [style.left.px]="interactable().x"
          [style.top.px]="interactable().y"
          [style.width.px]="interactable().width"
          [style.height.px]="interactable().height"
          style="position: absolute; opacity: 0.1; z-index: 999; border: 1px solid black; display: block; background: yellow; border-radius: 30%"
          (click)="activated.emit(interactable().verbs)"
        ></div>
      </div>
    </div>
  `,
})
export class Interactable {
  readonly interactable = input.required<InteractableDef>();
  readonly activated = output<VerbSet | undefined>();
}
