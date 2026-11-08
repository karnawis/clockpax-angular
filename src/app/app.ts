import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from './layout/footer';
import { GameMain } from './layout/game-main';
import { GameWrapper } from './layout/game-wrapper';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  imports: [GameWrapper, Header, GameMain, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block max-w-[1280px] mx-auto p-8 text-center' },
  template: `
    <app-game-wrapper>
      <app-header />
      <app-game-main />
      <app-footer />
    </app-game-wrapper>
  `,
})
export class App {}
