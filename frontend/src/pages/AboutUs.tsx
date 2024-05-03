const AboutUs = () => {
 return (
  <div className="container mx-auto px-4">
   <header className="text-center my-10">
    <h1 className="text-4xl font-bold text-primary">
     Simphiwe Sims Kubeka
    </h1>
    <p className="text-xl text-blue-950 italic font-semibold">
     Senior Front-end Developer
    </p>
    <p className="text-md text-gray-600">
     Email: sims.kubeka96@gmail.com | LinkedIn:
     www.linkedin.com/in/simphiwe-kubeka-9238b0178
    </p>
   </header>

   <section className="my-5">
    <h2 className="text-3xl font-semibold underline ">
     Profile Summary
    </h2>
    <p className="text-md mt-2 px-2">
     As an adept Senior Fron-tend Engineer with
     over six years of experience designing
     dynamic and user-centric online apps, I excel
     at architecting, optimising, and directing
     the development of advanced frontend systems.
     I'm known for my thorough attention to detail
     and specialize in turning complicated
     stakeholder needs into scalable, high-quality
     software solutions. I provide a strong
     combination of technical skills, innovative
     problem-solving, and excellent team
     communication. I aim to combine my knowledge
     of frontend technologies and enthusiasm for
     providing outstanding user experiences to
     drive innovation and surpass project.
    </p>
   </section>

   <section className="my-5">
    <h2 className="text-3xl font-semibold text-center underline">
     Skills
    </h2>
    <div className="flex flex-wrap justify-around mt-4 px-4">
     {/* Technical Skills */}
     <div className="w-full md:w-1/2 ">
      <h3 className="text-2xl font-semibold">
       Technical Skills
      </h3>
      <ul className="list-disc list-inside mt-2">
       <li>JavaScript</li>
       <li>Typescript</li>
       <li>Database Management: SQL, MongoDB</li>
       <li>Cloud Services: AWS</li>
       <li>Other: Git, Docker, CI/CD</li>
      </ul>
     </div>

     {/* Soft Skills */}
     <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold">
       Soft Skills
      </h3>
      <ul className="list-disc list-inside mt-2 ">
       <li>Effective communication</li>
       <li>Team collaboration</li>
       <li>Problem-solving</li>
       <li>Time management</li>
       <li>Adaptability</li>
      </ul>
     </div>
    </div>
   </section>

   {/* Detailed experience section listing previous job roles and responsibilities */}
   <section className="my-5">
    <h2 className="text-3xl font-semibold underline">
     Experience
    </h2>
    <div className="mt-2 px-2">
     <h3 className="text-xl font-bold">
      Senior Front-end Developer| Rentoza|
      Permanent
     </h3>
     <p className="italic">Oct 2023 - Present</p>
     <p>
      As a Senior Frontend Engineer at Rentoza, I
      oversaw the creation of sophisticated
      e-commerce applications in React,
      TypeScript, and Next.js. I streamlined
      processes, guided, and trained juniors, and
      integrated Amazon Web Services (AWS) and
      BigQuery to improve project scalability. My
      key contributions include automating product
      database transfers and pioneering thorough
      cross-platform testing and validation.
      Working with UX designers using Figma, I
      ensured high-quality, user-centric
      interfaces. Notably, I oversaw the
      introduction of a new storefront, designing
      its architecture and guiding the team to
      meet tight constraints, demonstrating my
      leadership and technical expertise.
     </p>
    </div>

    <div className="mt-2 px-2">
     <h3 className="text-xl font-semibold">
      Full-stack Developer| FuellTech Systems|
      Permanent
     </h3>
     <p className="italic">Mar 2019 - Oct 2023</p>
     <p>
      At FuellTech Systems, I was trusted to
      create/design new web interfaces, layouts,
      and site designs for a variety of clients in
      addition to transforming legacy code into
      reusable code components. I've also built
      websites, portals, and large-scale web
      applications for both complex and simple
      projects, demonstrating the technology we
      employ to customers. I've also created demo
      websites for new clients. I worked on
      projects that required API interaction with
      various providers, cloud computing and
      automation, cloud programs and
      functionalities, and back-end integration.
      One of my tasks was to ensure the quality of
      produced websites, including the validation
      of pages and links.{" "}
     </p>
    </div>

    <div className="mt-2 px-2">
     <h3 className="text-xl font-semibold">
      Technical Consultant| Zevoli Consulting|
      Fixed Term Contract
     </h3>
     <p className="italic">Nov 2018 - Apr 2019</p>
     <p>
      During my time at Zevoli, I've provided
      technical advice and assistance to the team
      working on their latest development project
      (OneLinkage). I helped compile numerous
      deliverables while also overseeing the
      explanation of the software environment, its
      components, and structure to non-technical
      team members so that they could comprehend
      its potential.{" "}
     </p>
    </div>
   </section>

   {/* Projects section showcasing notable work and accomplishments */}
   <section className="my-5">
    <h2 className="text-3xl font-semibold underline">
     Projects
    </h2>
    <ul className="list-disc list-inside mt-2 px-2">
     <li>
      Business Intergrator Online - A Custom CMS
      built for Absa and it third party clients.
     </li>
     <li>
      Discovery FlexiRoam - A Custom CMS built for
      Discovery for discovery clients to obtain a
      free E-Sim with the purchase of any personal
      travel insurance.
     </li>
     <li>
      Shopify Ecommerce Site - Fully developed
      theme and custom Retail POS .
     </li>
    </ul>
   </section>

   <footer className="text-center my-10">
    <p className="text-gray-700 font-semibold">
     © Simphiwe 'Sims' Kubeka - 2024
    </p>
   </footer>
  </div>
 );
};

export default AboutUs;
