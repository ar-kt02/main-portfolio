import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { ProjectInfo } from "../resources/types";
import Link from "next/link";

const ProjectCard = ({
   image,
   title,
   description,
   techStack,
   repoLink,
   liveLink,
}: ProjectInfo) => {
   return (
      <article className="rounded-md flex flex-col bg-white/5 border border-transparent hover:border-gray-300/30 hover:bg-white/10 duration-500 ease-out overflow-hidden">
         <div className="relative w-full h-48 mb-3 overflow-hidden">
            <Image
               src={image}
               alt={title}
               fill
               priority={true}
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover transition-transform duration-500 hover:scale-110 h-20 w-auto"
            />
         </div>
         <div className="space-y-3 mx-3 mb-3">
            <div className="flex gap-2 items-center">
               <h2 className="text-2xl font-semibold">{title}</h2>
               <Link
                  href={repoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"Go to Github repository"}
               >
                  <AiFillGithub className="text-gray-600 hover:text-white duration-500 transition-all h-7 w-auto" />
               </Link>
               {liveLink && (
                  <Link
                     href={liveLink}
                     target="_blank"
                     aria-label={"Go to Live App"}
                     className="rounded-md border border-white/30 px-2 hover:bg-white/30 duration-500 "
                  >
                     Live App
                  </Link>
               )}
            </div>
            <p>{description}</p>
            <ul className="flex flex-wrap gap-2">
               {techStack.map((tech) => (
                  <li
                     key={tech.name}
                     className="flex items-center gap-1 border-current border rounded-lg px-1.5 text-gray-400 hover:text-gray-300 duration-500 cursor-pointer"
                  >
                     <tech.icon className="h-auto w-auto" />
                     <p>{tech.name}</p>
                  </li>
               ))}
            </ul>
         </div>
      </article>
   );
};

export default ProjectCard;
