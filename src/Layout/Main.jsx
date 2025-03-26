import {Outlet} from "react-router-dom";
import Header2 from "../Components/Header/Header2";
import Footer2 from "../Components/Footer/Footer2";
import {ToastContainer} from "react-toastify";
import {DataProvider} from "../Appcontext/DataContext";
import FixedButton from "../Components/Icmdrse/FixedButton";
import WhatsAppButton from "../Components/Icmdrse/WhatsAppButton";
import TawkToChat from "../Components/Icmdrse/TawkToChat";
import SocialIconsBox from "../Components/Icmdrse/SocialIconsBox";
import {HelmetProvider} from "react-helmet-async";
const Main = () => {
  return (
    <DataProvider>
      <div className="main-page-area">
        <HelmetProvider>
          <Header2></Header2>
          <Outlet></Outlet>
          <Footer2></Footer2>
          <ToastContainer />
        </HelmetProvider>
      </div>
      <FixedButton />
      <WhatsAppButton /> <TawkToChat /> <SocialIconsBox></SocialIconsBox>
    </DataProvider>
  );
};

export default Main;
