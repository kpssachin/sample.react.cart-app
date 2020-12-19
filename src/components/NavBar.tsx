import React, { FC } from "react";
// import { UserContext } from "../utils/UserContext";

interface NavBarProps {
  setLogin: (isLogged: boolean) => void;
  loggedIn: boolean;
}

export const NavBar: FC<NavBarProps> = (props) => {
  // const context: { [key: string]: any } = useContext(UserContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex">
          {props.loggedIn ? (
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          ) : null}
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              props.setLogin(!props.loggedIn);
            }}
          >
            {props.loggedIn ? "SignOut" : "SignIn"}
          </button>
        </form>
      </div>
    </nav>
  );
};