"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./UserProfile.module.scss";
import { ChevronDown } from "lucide-react";
import ProfileDropDown from "./ProfileDropDown/ProfileDropDown";
import { useAuth } from "@/context/AuthContext";

const UserProfile = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };

    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showDropDown]);

  const { session } = useAuth();

  const { email } = session?.user;

  return (
    <div ref={profileRef} className={styles.UserProfile}>
      <div
        className={styles.left}
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <img
          src={
            "https://placehold.co/100x100/0ba8b5/ffffff?text=" +
            email[0].toUpperCase()
          }
          alt="User Avatar"
        />
        
      </div>

      {/* <div
        className={styles.right}
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <ChevronDown />
      </div> */}

      <ProfileDropDown
        show={showDropDown}
        setShow={setShowDropDown}
        email={email || ""}
      />
    </div>
  );
};

export default UserProfile;
