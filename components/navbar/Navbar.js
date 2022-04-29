import Link from "next/link";
import Image from "next/image";
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
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo_container}>
        <Link href="/"> 
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.navbar_bars_container}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={styles.nav_items_container}>
        <ul>
          {navigation.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.href}>
                <a>{nav.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="signup">
          <a className={styles.signup}>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
