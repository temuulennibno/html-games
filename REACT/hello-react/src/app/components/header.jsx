import Link from "next/link";
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
            <Link href="/" className="logo">
              <Logo />
            </Link>
          </div>
          <div>
            <Link href="#" className="search">
              <SearchIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
