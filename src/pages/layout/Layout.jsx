import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Loading from "../../components/Loading";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavBar />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
