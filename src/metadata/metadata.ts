import { Metadata } from "next";
import { MetadataConfig } from "@/resources/types";
export function buildMetadata({
   title,
   description,
}: MetadataConfig): Metadata {
   return {
      title: `${title} | Katz`,
      description: description || "Portfolio made by Katz.",
   };
}
