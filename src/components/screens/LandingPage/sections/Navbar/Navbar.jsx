import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo/logo_h.png" alt="ProductBase" />
        </Link>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
          <a href="#about">About</a>
        </nav>
        <div className={styles.actions}>
          <a href="/auth">Sign In</a>
          <a href="/auth" className={styles.button}>
            Get Started <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
