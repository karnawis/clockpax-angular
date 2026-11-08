import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-game-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="game-wrapper" class="relative bg-black-800 text-light min-h-screen">
      @if (reveal()) {
        <div id="reveal-screen">
          <h1 class="mb-8 text-5xl font-bold text-white-500">Welcome to clockPax Game</h1>
          <p class="mb-8">
            This nonlinear structure ties the worlds together through Fefe’s perspective, blending
            surrealism, emotional depth, and a sense of discovery.
          </p>
          <img
            class="mb-8 rounded-lg mx-auto w-full md:w-1/2"
            src="images/clockspax-intro.jpg"
            alt="clockPax"
          />
          <button class="bg-purple-700 p-8 mb-8 rounded-lg" (click)="revealScreenOn()">
            Ready to play
          </button>
        </div>
      } @else {
        <ng-content />
      }
    </div>
  `,
})
export class GameWrapper {
  private readonly sound = inject(SoundService);
  protected readonly reveal = signal(true);

  protected revealScreenOn(): void {
    this.sound.play(SoundService.reveal);
    this.reveal.set(false);
  }
}
