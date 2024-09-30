import { ProjectInfo } from "./types";
import {
   SiFlutter,
   SiDart,
   SiDjango,
   SiHeroku,
   SiMongodb,
   SiReact,
   SiExpress,
   SiPostgresql,
   SiNodedotjs,
   SiJest,
   SiTailwindcss,
   SiAxios,
   SiSupabase,
   SiNetlify,
} from "react-icons/si";

const techStackRef = {
   flutter: { name: "Flutter", icon: SiFlutter },
   dart: { name: "Dart", icon: SiDart },
   django: { name: "Django", icon: SiDjango },
   heroku: { name: "Heroku", icon: SiHeroku },
   mongodb: { name: "MongoDB", icon: SiMongodb },
   react: { name: "React", icon: SiReact },
   express: { name: "Express", icon: SiExpress },
   postgres: { name: "PostgreSQL", icon: SiPostgresql },
   node: { name: "Node.JS", icon: SiNodedotjs },
   jest: { name: "Jest", icon: SiJest },
   tailwind: { name: "Tailwind CSS", icon: SiTailwindcss },
   axios: { name: "Axios", icon: SiAxios },
   supabase: { name: "Supabase", icon: SiSupabase },
   netlify: { name: "Netlify", icon: SiNetlify },
};

const projectInfo: ProjectInfo[] = [
   {
      image: "/projects/pathpal.png",
      title: "PathPal",
      description:
         "The app was inspired by walking apps like Pokemon Go, you choose a 3d pet when you sign up, set a step goal and unlock cute items for your pet every time you level up. Gain XP by getting in your daily steps and view your pet in the real world with you using the AR feature.",
      repoLink: "https://github.com/ar-kt02/fe-pathpal",
      techStack: [
         techStackRef.flutter,
         techStackRef.dart,
         techStackRef.django,
         techStackRef.heroku,
         techStackRef.mongodb,
      ],
   },
   {
      image: "/projects/nc-news.png",
      title: "NC News",
      description:
         "NC News is designed as a responsive social news platform, allowing users to browse articles and engange through posting or deleting comments, as well as likes or disliking content. It also featuers a login system, article sorting, and topic filtering.",
      repoLink: "https://github.com/ar-kt02/NC-News-Frontend",
      techStack: [
         techStackRef.react,
         techStackRef.express,
         techStackRef.postgres,
         techStackRef.node,
         techStackRef.jest,
         techStackRef.tailwind,
         techStackRef.axios,
         techStackRef.netlify,
         techStackRef.supabase,
      ],
      liveLink: "https://katz-nc-news.netlify.app/articles",
   },
] as const;

export default projectInfo;
