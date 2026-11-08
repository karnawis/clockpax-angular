import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SoundService {
  static readonly click = 'sounds/soundbuttonclick.wav';
  static readonly reveal = 'sounds/soundreveal.wav';

  play(src: string): void {
    try {
      // Browsers may block audio before the first user gesture; ignore that quietly.
      new Audio(src).play().catch(() => undefined);
    } catch {
      // No audio support (e.g. SSR or tests).
    }
  }
}
