import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" && styles.active
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link} ${
            router.pathname === "/about" && styles.active
          }`}
        >
          About
        </a>
      </Link>
    </div>
  );
}
