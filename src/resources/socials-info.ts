import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { SocialInfo } from "./types";

export const socialLinks: SocialInfo[] = [
   {
      name: "Github",
      href: "https://github.com/ar-kt02",
      icon: AiFillGithub,
   },
   {
      name: "LinkedIn",
      href: "https://linkedin.com/in/arnon-katz",
      icon: AiFillLinkedin,
   },
   {
      name: "Email",
      href: "mailto:arnonkatz9@gmail.com",
      icon: AiOutlineMail,
      copyText: "arnonkatz9@gmail.com",
   },
];
