import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projectInfo from "@/resources/projects-info";

import { Metadata } from "next";
import { buildMetadata } from "@/metadata/metadata";

export const metadata: Metadata = buildMetadata({
   title: "Projects",
});

const ProjectsPage = () => {
   return (
      <section className="space-y-4">
         <h1 className="text-4xl font-semibold">Projects</h1>
         {projectInfo.map((project) => (
            <ProjectCard key={project.title} {...project} />
         ))}
      </section>
   );
};

export default ProjectsPage;
