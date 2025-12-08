# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Heroes of JavaScript and Magic III is a web-based reimplementation of the classic Heroes of Might and Magic III turn-based strategy game. The project aims to accurately replicate original game mechanics including heroes, creatures, resources, spells, artifacts, and combat systems.

**Tech Stack:**
- React 19.0.0 for UI components
- Vite 6.2.0 for build tooling and development
- JavaScript ES6+ (may transition to TypeScript)
- HTML5 Canvas for game graphics rendering
- CSS3 for interface styling

**Development Status:** Early stage - basic project structure is being established.

## Development Commands

**Note:** The project is in early setup phase. Once package.json is created, common commands will be:

```bash
# Install dependencies
npm install

# Start development server (typically runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (when configured)
npm run lint

# Run tests (when configured)
npm test
```

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
  data/          # Game data (creatures, spells, etc.)
  assets/        # Images, sounds, sprites
  utils/         # Shared utilities
```

## Important Notes

- This is a fan project for educational purposes, not affiliated with official HoMM3 rights holders
- Focus on game mechanic accuracy to match the original HoMM3 experience
- Optimize for browser performance given the complexity of real-time Canvas rendering
- Consider mobile compatibility for UI interactions, though primary target is desktop browsers