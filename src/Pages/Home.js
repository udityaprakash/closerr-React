
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Features from "../Sections/Features";
// import Navbar from "../components/Navbar/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      {/* <Navbar/> */}
      <HeroSection />
      <About />
      <Features/>
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
