import { Injectable, computed, inject, signal } from '@angular/core';
import { puzzleWords, scenes, verbs } from './data/scenes';
import { Scene, VerbSet } from './data/game.types';
import { SoundService } from './sound.service';

const DEFAULT_DETAILS = ['What would you like to do?'];
const sceneMap: Record<string, Scene> = scenes;

const toLines = (details: string | string[] | undefined): string[] =>
  details === undefined ? DEFAULT_DETAILS : Array.isArray(details) ? details : [details];

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly sound = inject(SoundService);

  readonly scenes = sceneMap;
  readonly verbs = verbs;
  readonly puzzleWords = puzzleWords;

  readonly currentScene = signal<Scene | null>(scenes.scene3);
  readonly currentDetails = signal<string[]>(toLines(scenes.scene3.details));
  readonly currentVerb = signal('explore');
  readonly trackedScenes = signal<string[]>(['s2']);

  readonly interactables = computed(() => this.currentScene()?.interactables ?? []);

  handleSelectVerb(verb: string): void {
    this.currentVerb.set(verb);
    this.currentDetails.set([`What would you like to ${verb}?`]);
    this.sound.play(SoundService.click);
  }

  handleCancelVerb(): void {
    this.currentVerb.set('');
    this.currentDetails.set(DEFAULT_DETAILS);
    this.sound.play(SoundService.click);
  }

  handleInteraction(verbSet: VerbSet | undefined): void {
    const action = verbSet?.[this.currentVerb()];
    if (action?.details) {
      this.currentDetails.set(toLines(action.details));
      this.currentVerb.set('default');
    }
    if (action?.aheadScene) {
      const aheadScene = this.scenes[action.aheadScene];
      if (!aheadScene) return;
      this.currentScene.set(aheadScene);
      this.currentDetails.set(toLines(aheadScene.details));
      this.currentVerb.set('default');
      this.addTrackedScene(aheadScene.key);
    }
  }

  handleExit(sceneName: string): void {
    const exit = this.scenes[sceneName];
    if (!exit) return;
    this.currentScene.set(exit);
    this.currentDetails.set(toLines(exit.details));
    this.addTrackedScene(exit.key);
  }

  private addTrackedScene(sceneKey: string): void {
    this.trackedScenes.update((tracked) =>
      tracked.includes(sceneKey) ? tracked : [...tracked, sceneKey],
    );
  }
}
