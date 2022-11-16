import Header from "./header";
import Footer from "./footer";
import 'antd/dist/antd.css';
import Dashboard from "../pages/dashboard";

const Layout = ({children}) => {

    return(
        <>
            <Header/>
            <main>{children}</main>
            <Dashboard/>


        </>
    )


}
export default Layout