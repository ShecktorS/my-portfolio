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
    "Esploro nuovi orizzonti con linee di codice intrecciate a creatività",
    "Armonizzare la creatività: dove la cadenza della vita incontra il flusso del codice",
    "Innovare. Giocare. Codificare. Ripetere",
    "Dove la tecnologia si armonizza con la creatività",
  ],
  description:
    "Sono Ettore, vivo a Bagheria, una città vicino a Palermo, e da diversi anni mi sono appassionato al mondo digitale, scoprendo le infinite possibilità che offre. 💻",
  about: [
    "Il mio background artistico e musicale mi ha permesso di affrontare i problemi in modo dinamico e originale, utilizzando un approccio metodico e fortemente logico per risolverli. Ho sempre avuto una mentalità digitale, impegnandomi costantemente per migliorare le mie abilità in intelligenza sociale ed emotiva, problem solving, time management e lavoro di squadra.",
    "Il mio percorso di studi è iniziato quindici anni fa con la sperimentazione della prima tastiera elettronica, che mi ha poi portato ad iscrivermi al conservatorio di musica nella classe di pianoforte, seguendo un percorso di vecchio ordinamento che è durato circa dieci anni. Nel frattempo, mi sono laureato con il massimo dei voti in DAMS, presso l'Università degli Studi di Palermo. 🎹",
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
        "𝗚𝗼𝗖𝗶𝗻𝗲 è una web app di 𝗽𝗿𝗲𝗻𝗼𝘁𝗮𝘇𝗶𝗼𝗻𝗲 𝗯𝗶𝗴𝗹𝗶𝗲𝘁𝘁𝗶 per il cinema sviluppata in sole 2 settimane con la metodologia Agile (𝗦𝗰𝗿𝘂𝗺). Grazie alle API di TMDB e alla potenza di 𝗥𝗘𝗔𝗖𝗧 (Vite), abbiamo creato una piattaforma user-friendly che offre la possibilità di registrarsi e accedere con facilità grazie all'uso di 𝗙𝗶𝗿𝗲𝗯𝗮𝘀𝗲.",
      demo: "https://finalprojectdb-d09ac.web.app",
      link: "https://github.com/ShecktorS/GoCine",
      image: "https://i.postimg.cc/k5c5prMr/GoCine.png",
    },
    {
      title: "Twitter Clone",
      description:
        "Twitter Clone, realizzata con React, offre un'esperienza simile a Twitter con funzionalità familiari e un'interfaccia user-friendly.",
      demo: "https://twitter-clone-shecktors.vercel.app",
      link: "https://github.com/ShecktorS/twitter-clone",
      image: "https://i.postimg.cc/q7jkG8Q4/Clone-di-Twitter.png",
    },
    {
      title: "React To-do List",
      description: "",
      demo: "https://react-to-do-list-neon.vercel.app",
      link: "https://github.com/ShecktorS/react-To-do-list",
      image: "https://i.postimg.cc/j5tMRfrw/Progetto-senza-titolo.png",
    },
    {
      title: "Movintage",
      description: "",
      demo: null,
      link: "https://github.com/ShecktorS/MOVINTAGE",
      image: "https://i.postimg.cc/Gp0MSN7j/Progetto-senza-titolo-2.png",
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
