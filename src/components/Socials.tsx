"use client";
import Link from "next/link";
import { useState } from "react";
import { socialLinks } from "@/resources/socials-info";
import { AiFillCopy } from "react-icons/ai";

const Socials = () => {
   const [copiedText, setCopiedText] = useState("");

   const handleCopy = (e: any, text: string) => {
      e.preventDefault();

      if (text) {
         navigator.clipboard.writeText(text);
         setCopiedText(text);

         setTimeout(() => {
            setCopiedText("");
         }, 5000);
      }
   };

   return (
      <div className="mt-1 flex flex-col gap-1">
         {socialLinks.map((social) => {
            return (
               <Link
                  href={social.href}
                  key={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={"Go to ${social.name}"}
                  className="text-gray-600 hover:text-white duration-500 transition-all flex flex-row items-center gap-1"
               >
                  <social.icon className="h-7 w-auto rounded-full"></social.icon>
                  {social.href && social.name !== "Email" ? (
                     <p>{social.href}</p>
                  ) : (
                     <p>{social.href.replace("mailto:", "")}</p>
                  )}
                  {social.copyText && (
                     <button
                        onClick={(e) => handleCopy(e, social.copyText || "")}
                        className={`flex items-center rounded-lg text-gray-600 hover:text-white duration-500 transition-all ${
                           copiedText ? "text-white" : ""
                        }`}
                     >
                        <AiFillCopy className="h-5 w-auto" />
                        {copiedText === social.copyText ? "Copied!" : "Copy"}
                     </button>
                  )}
               </Link>
            );
         })}
      </div>
   );
};

export default Socials;
