import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { GameService } from '../game.service';
import { PanelButtons } from '../ui/panel-buttons';

// 3x3 grid of possible exit positions
const ROWS = [
  ['a1', 'a2', 'a3'],
  ['b1', 'b2', 'b3'],
  ['c1', 'c2', 'c3'],
];

@Component({
  selector: 'app-panel',
  imports: [PanelButtons],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (exits(); as exits) {
      <div id="panel" class="absolute top-0 right-0 z-40">
        <table>
          <tbody>
            @for (row of rows; track $index) {
              <tr class="row">
                @for (cell of row; track cell) {
                  @if (exits[cell]; as exitName) {
                    <td class="exit">
                      <app-panel-buttons [name]="exitName" (pressed)="game.handleExit(exitName)" />
                    </td>
                  }
                }
              </tr>
            }
          </tbody>
        </table>
      </div>
    } @else {
      <div class="panel">
        <p class="text-red-500">No exits available.</p>
      </div>
    }
  `,
})
export class Panel {
  protected readonly game = inject(GameService);
  protected readonly rows = ROWS;
  protected readonly exits = computed(
    () => (this.game.currentScene() ?? this.game.scenes['scene1']).exits,
  );
}
