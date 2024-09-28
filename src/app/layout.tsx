import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: {
      default: "Katz",
      template: `%s`,
   },
   description: "Portfolio website of Katz",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="en">
         <body className="mx-auto max-w-2xl bg-slate-950 text-gray-200">
            <main className="flex flex-col min-h-screen p-7">
               <Navbar />
               <section className="flex-1 my-8">{children}</section>
               <Footer />
            </main>
         </body>
      </html>
   );
};

export default RootLayout;
