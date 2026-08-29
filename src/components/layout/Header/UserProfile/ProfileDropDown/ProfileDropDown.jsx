import React from "react";
import styles from "./ProfileDropDown.module.scss";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { CreditCard, Headset, LogOut, UserPen, Settings } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useLogout } from "@/hooks/useAuth";

const ProfileDropDown = ({ show, setShow, email }) => {
  const closeDropdown = () => {
    if (setShow) setShow(false);
  };

  const { mutate } = useLogout();

  return (
    <div
      className={`${styles.ProfileDropDown} ${show ? styles.show : ""}`}
      id="profileDropDown"
    >
      <div className={styles.header}>
        <div className={styles.img}>
          <img
            src={
              "https://placehold.co/100x100/0ba8b5/ffffff?text=" +
              email[0].toUpperCase()
            }
            alt="User Avatar"
          />
        </div>
        <div className={styles.text}>
          {/* <h4>Raja Rathinam</h4> */}
          <h4>{email}</h4>
        </div>
      </div>

      <div className={styles.links}>
        {/* <Link href={"/"} className={styles.navItem} onClick={closeDropdown}>
          <UserPen />
          Edit Profile
        </Link>

        <Link href={"/"} className={styles.navItem} onClick={closeDropdown}>
          <CreditCard />
          Manage Subscription
        </Link>
        
      

        <Link href={"/"} className={styles.navItem} onClick={closeDropdown}>
          <Headset />
          Support
        </Link> */}

        <Link href={"#"} className={styles.navItem} onClick={closeDropdown}>
          <Settings />
          Account Settings
        </Link>

        <button
          className={`${styles.navItem} ${styles.signOut}`}
          onClick={mutate}
        >
          <LogOut />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropDown;
