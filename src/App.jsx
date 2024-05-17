import NavBar from "./components/NavBar";
import Feature from "./sections/Feature";
import FeaturePlus from "./sections/FeaturePlus";
import Footer from "./sections/Footer";
import GraphicDisplay from "./sections/GraphicDisplay";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main>
      <NavBar></NavBar>
      <Hero></Hero>
      <Feature></Feature>
      <FeaturePlus></FeaturePlus>
      <Testimonials></Testimonials>
      <GraphicDisplay></GraphicDisplay>
      <Footer></Footer>
    </main>
  )
}

export default App;