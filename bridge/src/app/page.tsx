import Header from "@/components/header";
import Intro from "@/components/intro";
import LogoSlider from "@/components/logoSlider";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Intro />
      <LogoSlider />
    </main>
  );
};

export default Home;
