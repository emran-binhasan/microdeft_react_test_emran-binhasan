import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to={'/register'}>Register</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/add-course'}>Create Course</NavLink>
            <NavLink to={'/courses'}>Courses</NavLink>
        </header>
    );
};

export default Header;