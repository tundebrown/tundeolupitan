"use client";
import ImageSlider from "@/components/imageSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-indigo-800 to-sky-800",
    title: "Lumind AI",
    tools: "React Js, Node Js, Mongo DB, Gemini LLM, Cleark Agent",
    desc: "I played a key role in designing, developing, and deploying Lumind, an advanced AI-powered conversational assistant designed to deliver intelligent, accurate, and context-aware responses. Lumind leverages cutting-edge natural language processing (NLP) technologies to provide seamless and human-like interactions, catering to a wide range of user needs, from answering complex queries to offering personalized recommendations.",
    img: "/lumind/lumind_project1.png",
    link: "#",
    images: [
      "/lumind/lumind_project1.png",
      "/lumind/lumind_project2.png",
      "/lumind/lumind_project3.png",
      "/lumind/lumind_project4.png",
    ],
  },
  {
    id: 4,
    color: "from-indigo-800 to-sky-800",
    title: "Wallet Redeeming Web App",
    tools: "Next.js, Nestjs, Mongodb, Material UI",
    desc: "I was responsible for designing, developing, and deploying a Game Coin Redeeming Web Application that allows users to redeem, and manage in-game coins or rewards. The app provides a seamless experience for users to track their coin balance, redeem rewards, and view transaction history, while also offering a section for managing KYC details and bank details.",
    img: "/redeem/redeem1.png",
    link: "#",
    images: [
      "/redeem/redeem1.png",
      "/redeem/redeem2.png",
      "/redeem/redeem3.png",
    ],
  },
  {
    id: 5,
    color: "from-indigo-800 to-sky-800",
    title: "Investor Platform",
    tools: "Next.js, Nestjs, Mongodb, Material UI, web3js, remix, wagmi",
    desc: "I was responsible for designing, developing, and deploying an Investor Platform that allows token investors to securely redeem their vested tokens to their specified wallets. The platform provides a seamless experience for investors to track their vesting schedules, claim tokens, and view transaction history, while also offering an admin panel for managing vesting contracts and investor activities, wallet activities and contract transaction interactions.",
    img: "/investor/investor1.png",
    link: "#",
    images: ["/investor/investor1.png","/investor/investor2.png","/investor/investor3.png",],
  },
  {
    id: 6,
    color: "from-indigo-800 to-sky-800",
    title: "Application Tracking System",
    tools: "Next.js, Auth.js, Mongodb, Material UI, LLM, google email api",
    desc: "As a pivotal member of the development team, I spearheaded the creation of an intuitive and dynamic platform that revolutionizes the way organizations manage their recruitment process. the ATS offers a seamless and engaging user experience, seamlessly integrating with existing HR workflows to streamline candidate sourcing, screening, and hiring. Using the latest technologies and best practices, I crafted a system that not only simplifies the hiring process but also enhances collaboration and decision-making. ",
    img: "/ats/ats1.png",
    link: "#",
    images: ["/ats/ats1.png","/ats/ats2.png","/ats/ats3.png","/ats/ats4.png","/ats/ats6.png","/ats/ats5.png","/ats/ats7.png",],
  },
  {
    id: 7,
    color: "from-sky-800 to-orange-300",
    title: "Reporting Tool",
    tools: "Mongodb, Express.js, React.js, Node.js(MERN Stack), Material UI",
    desc: "As a key architect of this innovative solution, I led the development of a dynamic platform designed to simplify data analysis and leverage data from a database. The Reporting Tool offers a captivating and user-friendly interface, empowering stakeholders to dive deep into game performance metrics, player behavior insights, and revenue trends. Using cutting-edge technologies and advanced data visualization techniques, I crafted a tool that not only simplifies reporting but also enables data-driven decision-making and strategic planning.",
    img: "/reporting_tool_project.PNG",
    link: "#",
    images: ["/reporting_tool_project.PNG"],
  },
  {
    id: 8,
    color: "from-purple-950 to-indigo-800",
    title: "Upgraded Reporting Tool",
    tools: "Mongodb, Nestjs, Nextjs, Material UI",
    desc: "As a key architect of this innovative solution, I led the development of a dynamic platform designed to simplify data analysis and leverage data from a database. The Reporting Tool offers a captivating and user-friendly interface, empowering stakeholders to dive deep into game performance metrics, player behavior insights, and revenue trends. Using cutting-edge technologies and advanced data visualization techniques, I crafted a tool that not only simplifies reporting but also enables data-driven decision-making and strategic planning.",
    img: "/reporting/reporting1.png",
    link: "#",
    images: ["/reporting/reporting1.png","/reporting/reporting2.png","/reporting/reporting3.png",],
  },
  {
    id: 10,
    color: "from-orange-300 to-violet-950",
    title: "Anarchy NFT DApp",
    tools: "Nextjs, web3js, wagmi, Shadcn, Node js, screener api, remix",
    desc: "I was responsible for designing, developing, and deploying a Non-Fungible Token (NFT) Decentralized Application (DApp). The project involved creating a platform where users could mint, buy, sell, and trade NFTs seamlessly on the blockchain. The DApp was built using cutting-edge blockchain technologies, smart contracts, and front-end frameworks to ensure a secure, scalable, and user-friendly experience.",
    img: "/dapp/dapp2.png",
    link: "#",
    images: ["/dapp/dapp2.png","/dapp/dapp1.png",],
  },
  {
    id: 2,
    color: "from-purple-950 to-indigo-800",
    title: "Anarchy Game Website",
    tools: "Three.js, Framer-motion, React.js",
    desc: "Anarchy is a gaming company. As part of this exhilarating project, I had the privilege to craft an immersive website experience that transports users into a galaxy adventure. Leveraging the power of Three.js and framer-motion, I brought this captivating world to life, seamlessly blending stunning 3D objects and characters to create an interactive galaxy like experience. From swirling nebulae to intricately detailed celestial bodies, every element of the website pulsates with the energy and excitement that defines the Anarchy gaming ethos.",
    img: "/anarchy/anarchy_project.PNG",
    link: "#",
    images: ["/anarchy/anarchy_project.PNG"],
  },
  {
    id: 3,
    color: "from-purple-950 to-indigo-800",
    title: "Upgraded Anarchy Game Website",
    tools: "Webflow",
    desc: "Anarchy is a gaming company. As part of this exhilarating project, I had the privilege to craft an immersive website experience that transports users into a galaxy adventure. Leveraging the power of Three.js and framer-motion, I brought this captivating world to life, seamlessly blending stunning 3D objects and characters to create an interactive galaxy like experience. From swirling nebulae to intricately detailed celestial bodies, every element of the website pulsates with the energy and excitement that defines the Anarchy gaming ethos.",
    img: "/anarchy_project2.png",
    link: "#",
    images: [
      "/anarchy_project2.png",
      "/anarchy/anarchy_project2.png",
      "/anarchy/anarchy_project3.png",
      "/anarchy/anarchy_project4.png",
    ],
  },
  {
    id: 9,
    color: "from-violet-950 to-fuchsia-950",
    title: "FyzonX",
    tools: "framer CMS",
    desc: "As the web designer behind the innovative website, I had the privilege of collaborating with FyzonX team to bring their vision to life. The mission is to empower businesses to navigate the complexities of today's corporate landscape with confidence and clarity. Through a seamless blend of intuitive design and robust functionality, the FyzonX website serves as a gateway to a world of tailored solutions designed to meet the diverse needs of the clients. From legal consultations to HR strategies and from marketing campaigns to financial management",
    img: "/fyzonx_project.png",
    link: "#",
    images: ["/fyzonx_project.png"],
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-91%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-black bg-cover bg-no-repeat bg-[url('/portfolio_bg.jpg')]">
          My Works
        </div>
        <div className="sticky top-0 flex gap-0 xl:gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-950 to-purple-950 p-4" />
            {items.map((item) => (
              <div
                className={`relative lg:h-fit xl:h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-1 xl:gap-3 text-white p-6">
                  <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-100 h-56 md:w-96 md:h-64 lg:w-[600px] lg:h-[350px] xl:w-[800px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-100 text-sm md:w-96 lg:w-[600px] lg:text-xs xl:w-[800px]">
                    {item.desc}
                  </p>
                  <p className="w-100 md:w96 lg:w-[600px] lg:text-md xl:w-[800px]">
                    <span className="font-semibold ">Tools:</span> {item.tools}
                  </p>
                </div>
                <ImageSlider images={item.images} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Frontend and Backend Development
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
