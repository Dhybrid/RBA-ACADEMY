import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import TopCards from "../components/topCards";
 


const Home = () => {
  return (
    <body className="d-flex flex-column min-vh-100 overflow-x-hidden">
      {/* Gradiant */}
      <div className="bg-filter bg-gradient-dark">
        <div className="bg-filter-dots"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="academy-content main-content">
        <Hero />
        <TopCards/>
        <Footer />
      </main>
    </body>
  );
}

export default Home
