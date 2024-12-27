import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <>
        <ToastContainer/>
        <Header/>
        <Outlet/>
        </>
    );
};

export default Root;