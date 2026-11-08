import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <p class="font-bold text-slate-500">© {{ year }} - sura.me - All rights reserved</p>
    </footer>
  `,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
