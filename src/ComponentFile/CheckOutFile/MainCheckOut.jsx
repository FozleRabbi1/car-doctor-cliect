import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";

const MainCheckOut = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainCheckOut;