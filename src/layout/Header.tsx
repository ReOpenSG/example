import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner">
      <nav className="globalNavigationBar fixed">
        <ul className="flex">
          <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
            <Link to="/about">소개</Link>
          </li>
          <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
            <Link to="/announcement">공지사항 &gt;</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
