import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// import { UserContext } from "../../context/UserContext";

export default function NavBar() {
  // Theme Context
  const themeCtx = useContext(ThemeContext);
  const { setTheme } = themeCtx;

  // User Context
  // const userCtx = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">clubs</Link>

      <div>
        {/* <h3>Hello {userCtx.name}</h3> */}
      </div>
      
      <div>
        <label htmlFor="theme-toggle">
          Toggle Dark
          <input
            type="checkbox"
            onChange={() =>
              setTheme((prevState) =>
                prevState === "light" ? "dark" : "light",
              )
            }
          />
        </label>
      </div>
    </nav>
  );
}