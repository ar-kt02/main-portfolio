import { IconType } from "react-icons";

type TechStack = {
   name: string;
   icon: IconType;
};

export type ProjectInfo = {
   image: string;
   title: string;
   description: string;
   techStack: TechStack[];
   repoLink: string;
   liveLink?: string;
};

export type MetadataConfig = {
   title: string;
   description?: string;
};

export type SocialInfo = {
   name: string;
   href: string;
   icon: IconType;
   copyText?: string;
};
