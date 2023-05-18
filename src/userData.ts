export interface UserData {
  name: string;
  surname: string;
  role: string;
  description: string;
  place: string;
  birthday: [number, number, number];
  skills: string[];
  projects: object[];
  hobbies: string[];
  resources: { name: string; url: string; type: string }[];
}

export const myUserData: UserData = {
  name: "Ettore",
  surname: "Sanfilippo",
  role: "Front-end Web Developer",
  description:
    "Sono Ettore, vivo a Bagheria, una città vicino a Palermo, e da diversi anni mi sono appassionato al mondo digitale, scoprendo le infinite possibilità che offre. 💻",
  place: "Palermo",
  birthday: [24, 1, 1996],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SASS",
    "SCSS",
    "React",
    "Node",
    "Git",
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
