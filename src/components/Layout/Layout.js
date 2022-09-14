import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import MainPage from "./MainPage";

const Layout = (props) => {
    return (
        <MainPage>
        <MainNavigation />
        {props.children}
       
        </MainPage>
    )
}

export default Layout;