import EcoBanner from "../EcoBanner";
import coachingWisdomImg from "../../media/images/Coaching-Wisdom-Copy-1.jpg";
import { ContactBottomLink, Content } from "../Common";

const ServicesContent = () => {
  const contents = (
    <>
      
      <ContactBottomLink />
    </>
  )
  return(
    <>
      <EcoBanner imageUrl={coachingWisdomImg} title="My Services" />
      <Content prop={contents}/>
    </>
  )
}

export default ServicesContent