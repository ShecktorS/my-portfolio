# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architettura del Progetto

Portfolio personale sviluppato con **React 18**, **TypeScript**, **Vite** e **SASS Modules**.

### Struttura Principale

- **`src/userData.ts`**: File centralizzato contenente tutte le informazioni personali (bio, progetti, skills, risorse). Modificare qui per aggiornare i contenuti del portfolio
- **`src/App.tsx`**: Componente principale che gestisce il loader iniziale (2.5s), hamburger menu e navigation con react-scroll
- **`src/sections/`**: Sezioni principali della pagina (MainSection, AboutSection, SkillSection, ProjectSection, ContactSection)
- **`src/components/`**: Componenti riutilizzabili (Header, Footer, Navbar, HamburgerMenu, Loader, ProjectCard, Typewriter)

### Pattern di Styling

Ogni componente/sezione ha la sua struttura:
- `ComponentName.tsx` - logica del componente
- `index.tsx` - re-export (barrel pattern)
- `index.module.scss` - stili CSS Modules

**Variabili globali SASS**: `src/scss/_variables.scss` (palette colori primari/secondari)
**Mixins**: `src/scss/_mixins.scss`

### Navigazione

Il portfolio usa **react-scroll** per smooth scrolling tra sezioni. Ogni sezione è wrappata in un componente `<Element name="...">` e il Navbar/HamburgerMenu usano `<Link to="..." smooth>`.

## Comandi Principali

```bash
npm run dev      # Avvia dev server (Vite)
npm run build    # Build produzione (TypeScript check + Vite build)
npm run lint     # ESLint con max 0 warnings
npm run preview  # Preview build locale
```

## Note Tecniche

- **TypeScript strict mode** abilitato
- **Night mode** hardcoded attivo (`nightMode = true` in App.tsx)
- **Loader**: timeout fisso di 2500ms all'avvio
- **Audio feedback**: click sound su hamburger menu (`src/sounds/mouse-click.mp3`)
- **UserData interface**: fortemente tipizzata, rispettare la struttura quando si aggiungono progetti/skills

## Preferenze Utente

- Mi piace che quando finisci di lavorare mi fai il push

## Future Improvements

### API REST per userData
In futuro, migrare da mock statico (userData.ts) a API REST usando **Vercel Serverless Functions**:
- `/api/user` - info personali
- `/api/projects` - lista progetti
- `/api/skills` - skills
- `/api/resources` - CV e link social

Vantaggi: già integrato con Vercel, zero configurazione extra, gratuito, stesso repo.
