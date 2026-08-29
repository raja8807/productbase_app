"use client";

import { Bell } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import styles from "./NotificationsButton.module.scss";
import NotificationsList from "./NotificationsList/NotificationsList";

const NotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.NotificationsButton} ref={containerRef}>
      <button 
        className={styles.bellBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        <Bell size={20} />
        <div className={styles.bubble}>3</div>
      </button>
      
      <NotificationsList isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default NotificationsButton;
