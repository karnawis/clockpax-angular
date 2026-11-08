import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Panel } from '../core/panel';
import { Verbs } from '../core/verbs';
import { Views } from '../game/views';
import { GameDetails } from '../ui/game-details';
import { GamePuzzle } from '../ui/game-puzzle';

@Component({
  selector: 'app-game-main',
  imports: [Views, Panel, Verbs, GameDetails, GamePuzzle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-full">
      <div class="relative mb-4">
        <app-views />
        <app-panel />
        <app-verbs />
      </div>
      <div class="grid grid-cols-2 gap-4 p-4">
        <app-game-details />
        <app-game-puzzle />
      </div>
    </div>
  `,
})
export class GameMain {}
