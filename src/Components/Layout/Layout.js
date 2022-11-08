import Header from "./../Header/Header";
import classes from "./Layout.module.scss";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
}

export default Layout;
