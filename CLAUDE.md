# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Heroes of JavaScript and Magic III is a web-based reimplementation of the classic Heroes of Might and Magic III turn-based strategy game. The project aims to accurately replicate original game mechanics including heroes, creatures, resources, spells, artifacts, and combat systems.

**Tech Stack:**
- React 19.2.1 for UI components
- Vite 7.2.7 for build tooling and development
- Redux Toolkit 2.11.1 for state management
- i18next 25.7.2 + react-i18next 16.4.0 for internationalization
- Vitest 4.0.15 for unit testing
- Testing Library for React component testing
- ESLint 9.39.1 for code linting
- Prettier 3.7.4 for code formatting
- Sass for advanced styling (CSS3 baseline)
- JavaScript ES6+ (may transition to TypeScript)
- HTML5 Canvas for game graphics rendering

**Development Status:** Dependencies installed. Configuration files and src/ directory structure need to be established.

**Package Manager:** This project uses pnpm for dependency management.

## Development Commands

The following commands are available via pnpm scripts defined in package.json:

```bash
# Install dependencies (already completed)
pnpm install

# Start development server (runs on http://localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint

# Run tests once
pnpm test

# Run tests in watch mode (for active development)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

**Note:** Configuration files (vite.config.js, eslint.config.js, vitest.config.js) still need to be created.

## Architecture Considerations

### Game Systems to Implement

The architecture should support these core HoMM3 systems:

1. **Game State Management**
   - Turn-based game loop
   - Player/AI turn management
   - Resource tracking (gold, wood, ore, crystals, gems, mercury, sulfur)
   - Hero progression and experience
   - Army composition and creature stacks

2. **Map System**
   - Adventure map rendering (Canvas-based)
   - Tile-based movement
   - Object interaction (towns, resources, artifacts, etc.)
   - Fog of war
   - Random map generation (planned feature)

3. **Combat System**
   - Hex-grid tactical battlefield
   - Turn-based combat mechanics
   - Creature abilities and special attacks
   - Spell casting during combat
   - Combat AI

4. **Town Management**
   - Building construction and upgrade trees
   - Creature recruitment
   - Town-specific mechanics per faction

5. **Hero System**
   - Skills and skill trees
   - Spell books and spell learning
   - Artifact equipment slots
   - Army leadership

6. **Multiplayer (Planned)**
   - Network synchronization
   - Turn submission and validation
   - State consistency

### State Management with Redux Toolkit

The project uses Redux Toolkit for centralized state management. Consider organizing the Redux store by game systems:

- **Game Slice**: Turn management, current phase, active player
- **Resources Slice**: Player resources (gold, wood, ore, etc.)
- **Heroes Slice**: Hero data, positions, armies, skills
- **Map Slice**: Map state, fog of war, discovered objects
- **Combat Slice**: Active combat state, unit positions, turn order
- **Towns Slice**: Town buildings, garrisons, recruitment

Use Redux Toolkit's `createSlice` and `createAsyncThunk` for clean action/reducer patterns and async operations (e.g., loading game data, AI turns).

### Canvas Rendering

The game uses HTML5 Canvas for rendering the game world. Consider:
- Efficient sprite management and caching
- Layer-based rendering (terrain, objects, units, UI)
- Animation frame management
- Performance optimization for large maps

### Data Organization

HoMM3 has extensive game data (creatures, artifacts, spells, buildings, etc.). Consider:
- JSON-based data definitions for game entities
- Asset loading and management
- Sprite atlases for efficient texture usage

### Internationalization (i18n)

The project uses i18next and react-i18next for multi-language support:
- Store translation files in a dedicated i18n/ or locales/ directory
- Organize translations by namespace (e.g., common, heroes, creatures, spells, ui)
- Use translation keys for all user-facing text
- Support for language switching at runtime
- Consider pluralization rules and number/date formatting per locale

### Testing Strategy

The project uses Vitest as the test runner and React Testing Library for component testing:
- Write unit tests for game logic (combat calculations, resource management, etc.)
- Use React Testing Library for UI component testing
- Test Redux slices and async thunks in isolation
- Consider integration tests for complex game flows
- Use `pnpm test:watch` during development for immediate feedback
- Maintain test coverage with `pnpm test:coverage`
- Mock Canvas API for rendering tests when needed

## Project Structure (To Be Established)

When setting up the codebase, organize around game systems rather than technical layers:

```
src/
  components/     # React UI components
  game/          # Core game logic
    combat/      # Combat system
    heroes/      # Hero management
    towns/       # Town system
    map/         # Map and exploration
  store/         # Redux store and slices
    slices/      # Redux slices by feature
  i18n/          # Internationalization
    locales/     # Translation files (en, ru, etc.)
  data/          # Game data (creatures, spells, etc.)
  assets/        # Images, sounds, sprites
  utils/         # Shared utilities
  __tests__/     # Test files (or colocated with source)
```

## Next Steps

The following configuration and setup tasks remain:

1. **Configuration Files**
   - Create `vite.config.js` with Vite and plugin configuration
   - Create `eslint.config.js` for linting rules
   - Create `vitest.config.js` for test configuration (or integrate with Vite config)
   - Create `.prettierrc` for code formatting rules

2. **Project Structure**
   - Set up the `src/` directory structure
   - Create entry point files (`main.jsx`, `App.jsx`)
   - Set up `index.html` in the project root

3. **Initial Setup**
   - Configure Redux store with provider
   - Set up i18next with initial locale files
   - Create base UI layout and routing structure

## Important Notes

- This is a fan project for educational purposes, not affiliated with official HoMM3 rights holders
- Focus on game mechanic accuracy to match the original HoMM3 experience
- Optimize for browser performance given the complexity of real-time Canvas rendering
- Consider mobile compatibility for UI interactions, though primary target is desktop browsers