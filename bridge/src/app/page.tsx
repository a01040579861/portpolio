import Header from "@/components/header";
import Intro from "@/components/intro";
import Item from "@/components/item";
import LogoSlider from "@/components/logoSlider";
import Point from "@/components/point";
import Profile from "@/components/profile";
import Project from "@/components/project";

const logos1 = [
  "html",
  "css",
  "js",
  "react",
  "redux",
  "ajax",
  "jquery",
  "sass",
  "styled-component",
  "tailwind",
];

const logos2 = [
  "axios",
  "gsap",
  "next",
  "react_query",
  "supabase",
  "ts",
  "zustand",
];

const logos3 = [
  "aws",
  "firebase",
  "firestore",
  "mariaDB",
  "mongodb",
  "mysql",
  "netlify",
  "postman",
  "sqlite",
];
const logos4 = [
  "androidstudio",
  "api",
  "bs4",
  "express",
  "git",
  "java",
  "jupyter",
  "kotlin",
  "node",
  "php",
  "python",
  "requests",
  "selenium",
];

const Home = () => {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <Intro />

      {/* 첫 번째 슬라이드 */}
      <div className="w-full h-full">
        <LogoSlider
          logos={logos1}
          folder="logo_1"
          direction="left"
          speed={10}
        />
      </div>

      <Profile />

      {/* 두 번째 슬라이드 */}
      <div className="w-full h-full">
        <LogoSlider
          logos={logos2}
          folder="logo_2"
          direction="right"
          speed={10}
        />
      </div>

      <Project />
      {/* 세 번째 슬라이드 */}
      <div className="w-full h-full">
        <LogoSlider
          logos={logos3}
          folder="logo_3"
          direction="left"
          speed={10}
        />
      </div>

      <Item />

      {/* 네 번째 슬라이드 */}
      <div className="w-full h-full">
        <LogoSlider
          logos={logos4}
          folder="logo_4"
          direction="right"
          speed={10}
        />
      </div>

      <Point />
    </main>
  );
};

export default Home;
