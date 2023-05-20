export interface UserData {
  name: string;
  surname: string;
  role: string;
  slogan: string[];
  description: string;
  about: string[];
  place: string;
  birthday: [number, number, number];
  skills: { type: string; skills: { name: string; icon: string }[] }[];
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
    {
      type: "script",
      skills: [
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss3" },
        { name: "JavaScript", icon: "SiJavascript" },
      ],
    },
    // {
    //   SiHtml5,
    //   SiCss3,
    //   SiSass,
    //   SiCssmodules,
    //   SiJavascript,
    //   SiTypescript,
    //   SiReact,
    //   SiGit,
    // }
    // ,
    // "CSS",
    // "JavaScript",
    // "TypeScript",
    // "SASS",
    // "SCSS",
    // "React",
    // "Node",
    // "Git",
  ],
  projects: [{}, {}, {}],
  hobbies: ["Origami", "Disegno", "Musica"],
  resources: [
    {
      name: "CV",
      url: "https://drive.google.com/file/d/1T_w-y9jcmu7TWAxI9sATMsiOWtQkViZA/view?usp=sharing",
      type: "PDF",
    },
  ],
};
