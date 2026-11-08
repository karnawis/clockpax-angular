import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Interactable } from '../core/interactable';
import { GameService } from '../game.service';

@Component({
  selector: 'app-views',
  imports: [Interactable],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (game.currentScene(); as scene) {
      <div id="views" class="rounded-lg flex shadow items-center justify-center relative">
        <div
          class="rounded-lg mx-auto w-[500px] relative z-[1]"
          [style.background-image]="'url(' + scene.image + ')'"
          style="background-size: 100%; background-repeat: no-repeat; background-position: top center; height: 500px; width: 500px"
        >
          @for (interactable of scene.interactables; track interactable.name) {
            <app-interactable
              [interactable]="interactable"
              (activated)="game.handleInteraction($event)"
            />
          }
          <div
            id="puzzle-number"
            class="absolute top-1/4 left-1/4 w-6 h-6 bg-transparent flex items-start justify-right"
          >
            <p id="puzzle-number-button" class="font-bold text-xs">{{ scene.puzzle }}</p>
          </div>
        </div>
      </div>
    } @else {
      <div id="views" class="rounded-lg flex shadow items-center justify-center relative">
        <p class="text-red-500">No scene available to display. Choose another scene</p>
      </div>
    }
  `,
})
export class Views {
  protected readonly game = inject(GameService);
}
