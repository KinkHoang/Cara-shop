import { Route } from "react-router-dom";
import Header from "../../components/User/Header";
import Footer from "../../components/User/Footer";
import Newsletter from "../../components/User/Newsletter";

function DefaultLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
            <Header {...other} />
            <Component {...other} {...routeProps} />
            <Newsletter />
            <Footer />
          </>
        );
      }}
    />
  );
}

export default DefaultLayout;
