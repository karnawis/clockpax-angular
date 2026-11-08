import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { scenes } from './data/scenes';
import { GameService } from './game.service';

describe('GameService', () => {
  const setup = () => TestBed.inject(GameService);

  it('starts on scene 3 with only s2 tracked', () => {
    const game = setup();
    expect(game.currentScene()).toBe(scenes.scene3);
    expect(game.currentVerb()).toBe('explore');
    expect(game.trackedScenes()).toEqual(['s2']);
    expect(game.currentDetails().join('')).toBe('Details 3 placeholder');
  });

  it('selecting a verb updates the prompt, cancelling clears it', () => {
    const game = setup();
    game.handleSelectVerb('use');
    expect(game.currentVerb()).toBe('use');
    expect(game.currentDetails()).toEqual(['What would you like to use?']);
    game.handleCancelVerb();
    expect(game.currentVerb()).toBe('');
    expect(game.currentDetails()).toEqual(['What would you like to do?']);
  });

  it('exits move to the new scene and track it once', () => {
    const game = setup();
    game.handleExit('scene4');
    expect(game.currentScene()).toBe(scenes.scene4);
    game.handleExit('scene3');
    game.handleExit('scene4');
    expect(game.trackedScenes().filter((k) => k === 's4').length).toBe(1);
  });

  it('interaction shows details, then the default verb opens a secret room', () => {
    const game = setup();
    const object1 = scenes.scene3.interactables[0].verbs;
    game.handleInteraction(object1); // explore -> details
    expect(game.currentVerb()).toBe('default');
    game.handleInteraction(object1); // default -> aheadScene scene13
    expect(game.currentScene()).toBe(scenes.scene13);
    expect(game.trackedScenes()).toContain('s13');
  });

  it('ignores interactables without verbs', () => {
    const game = setup();
    game.handleInteraction(undefined);
    expect(game.currentScene()).toBe(scenes.scene3);
  });
});
