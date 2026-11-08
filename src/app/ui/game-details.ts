import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="details" class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-xl font-bold text-gray-800 mb-2">Details About Each Scene</h2>
      <p class="text-slate-500">Current Scene: {{ game.currentDetails().join('') }}</p>
    </div>
  `,
})
export class GameDetails {
  protected readonly game = inject(GameService);
}
