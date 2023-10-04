"use client";

import Image from "next/image";
import Link from "next/link";
import youtubeIcon from "../../assets/youtube-logo.svg";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import SignIn from "./SignIn";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(
    () => {
      const unsubscribe = onAuthStateChangedHelper((user) => {
        setUser(user);
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    },
    [] /* No dependencies, never rerun */
  );

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={90} height={20} src={youtubeIcon} alt="YouTube Logo" />
        <SignIn user={user} />
      </Link>
    </nav>
  );
}
