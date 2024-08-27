import { Logo } from "./logo";
import { SearchIcon } from "./search-icon";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <div className="nav">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="logo">
              <Logo />
            </a>
          </div>
          <div>
            <a href="#" className="search">
              <SearchIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
