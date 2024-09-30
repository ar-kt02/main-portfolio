import { IconType } from "react-icons";

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
