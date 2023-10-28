import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";


const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;


const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px rgb(21,221,211);
  border-color: rgb(21,221,211) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;


const Text = styled.h4`
  font-size: calc(0.5rem + .5vw);
  line-height: 1.5;
  color: var(--nav2);
  text-align:justify;
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
           

            <Text>
            Closer is an innovative startup in the online social media and networking industry, It was designed and developed by MAVI TECHNOLOGIES PVT LTD . Our app uses location-based technology to connect users who are nearby or have crossed paths in real life .we turns missed connections into potential relationships. With a focus on serendipity and proximity, Closer offers a unique and exciting way for people to meet and connect. We projected our revenue streams through targeted advertising. Our growth plan includes strategic partnerships, marketing initiatives, and continuous product enhancements. We project strong revenue and profitability as we revolutionize the way people connect. Join us on this incredible journey and be part of reshaping the future of relationships! 

            we are the upcoming and highly anticipated startup in the online social networking industry. Our app, which is set to launch soon. We at closer aims to revolutionize the way people meet and connect. We have exciting revenue streams planned, including targeted advertising. Stay tuned for updates on our launch and be ready to experience a whole new way of finding meaningful connections!
            </Text>
            <div>
              <Circle style={{ backgroundColor: "rgb(21,221,211)" }} />
              <Circle style={{ backgroundColor: "rgb(21,221,211)" }} />
              <Circle style={{ backgroundColor: "rgb(21,221,211)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
