import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import NewsArticle from "./components/newsArticle/NewsArticle";
import Info from "./components/info/Info";
import Pros from "./components/question/Pros";
import Footer from "./components/footer/Footer";
import ReportsScam from "./components/question/ReportsScam";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsArticle />
      <Info />
      <Steps />
      <Pros />
      {/* <ReportsScam /> */}
      <Footer />
    </>
  );
}

export default App;
