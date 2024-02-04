import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../Providers/AuthProvider";
import Raf from "../../raf/raf";



const Home = () => {

  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
    return (
        <div className="">
          {/* {AuthInfo.name} */}
          <Banner></Banner>
         
          
        </div>
    );
};

export default Home;