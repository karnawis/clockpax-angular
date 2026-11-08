# ClockPax (Angular 21)

Point-and-click puzzle game, ported from the React/Vite version ([clockpax](https://github.com/karnawis/clockpax)) to Angular 21.

Click the hotspots in each scene, pick a verb (`explore` / `use`), and use the exit buttons to move between scenes. Some hotspots open secret rooms that complete a line of the puzzle poem.

## Stack
- Angular 21: standalone components, signals, zoneless-ready, new control flow (`@if` / `@for`)
- Tailwind CSS 3 (same theme colours as the original)
- Game state lives in `GameService` (signals); sounds in `SoundService`
- Scene data in `src/app/data/`

## Run
```bash
npm install --legacy-peer-deps   # see note below
npm start                        # http://localhost:4200
npm run build                    # output in dist/clockpax-angular
npm test                         # game logic tests (Vitest)
```

Note: `--legacy-peer-deps` works around an npm 10 dependency-resolver crash with the Angular 21 test tooling.
