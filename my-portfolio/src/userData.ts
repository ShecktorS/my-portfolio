export interface UserData {
  name: string;
  surname: string;
  role: string;
  slogan: string[];
  description: string;
  about: string[];
  place: string;
  birthday: [number, number, number];
  skills: { type: string; name: string; id: number }[];
  projects: object[];
  hobbies: string[];
  resources: { name: string; url: string; type: string }[];
}

export const myUserData: UserData = {
  name: "Ettore",
  surname: "Sanfilippo",
  role: "Front-end Web Developer",
  slogan: [
    "Tra righe di codice e pentagrammi",
    "Armonizzare la creatività: dove la cadenza della vita incontra il flusso del codice",
    "Innovare. Giocare. Codificare. Ripetere",
    "Dove la tecnologia si armonizza con la creatività",
  ],
  description:
    "Sono Ettore, vivo a Bagheria, una città vicino a Palermo, e da diversi anni mi sono appassionato al mondo digitale, scoprendo le infinite possibilità che offre.",
  about: [
    "Il mio background artistico e musicale mi ha permesso di affrontare i problemi in modo dinamico e originale, utilizzando un approccio metodico e fortemente logico per risolverli. Ho sempre avuto una mentalità digitale, impegnandomi costantemente per migliorare le mie abilità in intelligenza sociale ed emotiva, problem solving, time management e lavoro di squadra.",
    "Il mio percorso di studi è iniziato quindici anni fa con la sperimentazione della prima tastiera elettronica, che mi ha poi portato ad iscrivermi al conservatorio di musica nella classe di pianoforte, seguendo un percorso di vecchio ordinamento che è durato circa dieci anni. Nel frattempo, mi sono laureato con il massimo dei voti in DAMS, presso l'Università degli Studi di Palermo.",
  ],
  place: "Palermo",
  birthday: [24, 1, 1996],
  skills: [
    { type: "script", name: "HTML 5", id: 1 },
    { type: "script", name: "CSS 3", id: 2 },
    { type: "script", name: "JavaScript", id: 3 },
    { type: "preProcessor", name: "SASS", id: 4 },
    { type: "other", name: "CSS modules", id: 5 },
    { type: "superSet", name: "TypeScript", id: 6 },
    { type: "framework", name: "React", id: 7 },
    { type: "other", name: "Node", id: 8 },
    { type: "other", name: "Git", id: 9 },
  ],
  projects: [
    {
      title: "GoCine",
      description:
        "GoCine è una web app di prenotazione biglietti per il cinema sviluppata in sole 2 settimane con la metodologia Agile (Scrum). Grazie alle API di TMDB e alla potenza di React (Vite), abbiamo creato una piattaforma user-friendly che offre la possibilità di registrarsi e accedere con facilità grazie all'uso di Firebase.",
      demo: "https://finalprojectdb-d09ac.web.app",
      link: "https://github.com/ShecktorS/GoCine",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
    },
    {
      title: "Twitter Clone",
      description:
        "Twitter Clone, realizzata con React, offre un'esperienza simile a Twitter con funzionalità familiari e un'interfaccia user-friendly.",
      demo: "https://twitter-clone-shecktors.vercel.app",
      link: "https://github.com/ShecktorS/twitter-clone",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=500&fit=crop",
    },
    {
      title: "React To-do List",
      description:
        "Applicazione per la gestione di task quotidiani con interfaccia intuitiva e drag & drop. Realizzata con React e Local Storage per la persistenza dei dati.",
      demo: "https://react-to-do-list-neon.vercel.app",
      link: "https://github.com/ShecktorS/react-To-do-list",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    },
    {
      title: "Movintage",
      description:
        "Progetto vintage per la ricerca e visualizzazione di film classici, con design retrò e moderne funzionalità di ricerca.",
      demo: null,
      link: "https://github.com/ShecktorS/MOVINTAGE",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop",
    },
  ],
  hobbies: ["Origami", "Disegno", "Musica"],
  resources: [
    {
      name: "CV",
      url: "https://drive.google.com/file/d/1T_w-y9jcmu7TWAxI9sATMsiOWtQkViZA/view?usp=sharing",
      type: "PDF",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ettore-sanfilippo",
      type: "web-site",
    },
    {
      name: "Github",
      url: "https://github.com/ShecktorS",
      type: "web-site",
    },
  ],
};
