import Socials from "./Socials";

const Biography = () => {
   return (
      <div className="space-y-4">
         <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Arnon Katz</h1>
            <p>Software Developer</p>
            <Socials />
         </div>
         <p>
            {`This website serves as a portfolio for my projects and a platform
            for my blog, where I share insights and ideas from my tech journey.
            It's a space where my work and thoughts come together.`}
         </p>
         <p>
            Welcome to my corner of the web. Feel free to explore and connect!
         </p>
      </div>
   );
};

export default Biography;
