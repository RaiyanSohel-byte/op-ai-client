import React from "react";
import Dot from "../icons/Dot";
import { Inter, League_Gothic } from "next/font/google";
import Image from "next/image";
import bg from "../../../../public/globalBg.png";
import FeatureCard from "../cards/FeatureCard";
import voiceIcon from "../../../../public/voice.png";
import mentalIcon from "../../../../public/mental.png";
import performanceIcon from "../../../../public/performence.png";
import videoIcon from "../../../../public/video.png";
import supportIcon from "../../../../public/support.png";

const inter = Inter({ subsets: ["latin"] });
const gothic = League_Gothic({
  subsets: ["latin"],
});

const Features = () => {
  const features = [
    {
      title: "Smart AI Chat Support",
      subTitle:
        "Engage in dynamic conversations with our AI coach, receiving tailored advice and guidance.",
      img: supportIcon,
    },
    {
      title: "Text & Voice Interaction",
      subTitle:
        "Interact seamlessly through text or voice, powered by advanced 11Labs technology.",
      img: voiceIcon,
    },
    {
      title: "Suggests Videos & Blogs",
      subTitle:
        "Receive curated video and blog suggestions aligned with your goals and interests.",
      img: videoIcon,
    },
    {
      title: " Performance and Mental Wellbeing Coaching",
      subTitle:
        "Gain valuable insights into your performance, with personalized feedback and progress tracking.",
      img: performanceIcon,
    },
    {
      title: "OP Mental Performance Tools",
      subTitle:
        "Rest assured with our HIPAA-compliant architecture, ensuring your data's privacy and security.",
      img: mentalIcon,
    },
  ];
  return (
    <section className="relative text-center flex items-center justify-center h-400 lg:h-229">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />
      <div>
        <span className="head-badge mb-12">
          <Dot /> Features
        </span>
        <p
          className={`${inter.className} text-white text-[16px] leading-5 font-medium mb-10`}
        >
          Explore the capabilities of our AI coach chatbot, designed to enhance
          your personal and professional growth.
        </p>
        <h1
          className={`${gothic.className} text-white leading-11 text-4xl mb-4`}
        >
          Core Features
        </h1>
        <p
          className={`${inter.className} text-white text-[16px] leading-5 font-medium mb-25`}
        >
          Our AI coach chatbot offers a range of features to support your growth
          journey.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 max-w-218.5 mx-auto px-4 lg:px-0 lg:gap-10 justify-items-center-safe space-y-4 lg:space-y-0">
          {" "}
          {features.map((feature, index) => (
            <FeatureCard key={index + 1} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
