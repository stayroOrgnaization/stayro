import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqList from '../components/FAQ'
import Image from "next/image";
import Img from "../../../public/image.png";

const Policy = () => {
  return (
    <>
      <Navbar />
        <FaqList />
      <Footer />
    </>
  );
};

export default Policy;