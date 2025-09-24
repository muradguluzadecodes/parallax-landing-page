import Features from "./components/Features";
import Hero from "./components/Hero";

import OurCollective from "./components/OurCollective";
import Table from "./components/Table";
import Brands from "./components/Brands";
import Moon from "./components/Moon";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-[#151924] overflow-hidden">
      <Header />

      <main className=" min-h-[100vh] w-full py-10 lg:px-20 px-10">
        <Hero />
        <Features />
        <OurCollective />
        <Table />
        <Brands />
        <Moon />
      </main>

      <Footer />
    </div>
  );
}

export default App;
