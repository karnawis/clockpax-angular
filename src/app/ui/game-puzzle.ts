import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-puzzle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-xl font-bold text-gray-800 mb-2">Puzzle</h2>
      <ul>
        @for (word of game.puzzleWords; track word.key) {
          <li
            [class.puzzle-completed]="game.trackedScenes().includes(word.key)"
            [class.puzzle-not-completed]="!game.trackedScenes().includes(word.key)"
          >
            {{ word.name }}
          </li>
        }
      </ul>
    </div>
  `,
})
export class GamePuzzle {
  protected readonly game = inject(GameService);
}
