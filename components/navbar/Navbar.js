import Link from "next/link";
import Image from "next/image";
// Hooks
import { useState } from "react";
// Styles
import styles from "./Navbar.module.scss";
// Assets
import logo from "../../public/images/logo.svg";

const navigation = [
  { name: "Product", href: "/" },
  { name: "Features", href: "/" },
  { name: "Marketplace", href: "/" },
  { name: "Company", href: "/" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_container}>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navbar_bars_container} onClick={toggleMenu}>
        {isOpen ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>
      <div className={`${styles.nav_items_container} ${isOpen && styles.active}`}>
        <ul>
          {navigation.map((nav) => (
            <li key={nav.name} onClick={() => setIsOpen(false)}>
              <Link href={nav.href}>
                <a>{nav.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="signup">
          <a className={styles.signup} onClick={() => setIsOpen(false)}>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
