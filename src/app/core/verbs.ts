import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-verbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="verbs" class="p-3 bg-white rounded-lg shadow absolute bottom-0 right-0">
      <h2 class="text-slate-800 text-3xl">Verb</h2>
      <ul>
        @for (verb of game.verbs; track verb) {
          <li>
            @if (verb === game.currentVerb()) {
              <button class="verb-active text-slate-500 px-5 py-2.5" (click)="game.handleCancelVerb()">
                {{ verb }}
                <span class="text-slate-500 px-5 py-2.5">[X]</span>
              </button>
            } @else {
              <button class="verb-inactive text-slate-500 px-5 py-2.5" (click)="game.handleSelectVerb(verb)">
                {{ verb }}
              </button>
            }
          </li>
        }
      </ul>
    </div>
  `,
})
export class Verbs {
  protected readonly game = inject(GameService);
}
