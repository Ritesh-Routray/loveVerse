import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Learn from "./components/Learn";
import Safety from "./components/Safety";

export default function Home() {
  return (
    <>
    <Header/>
    <HomePage/>
    <About/>
    <Learn/>
    <Safety/>
    <Footer/>
    </>
  );
}
