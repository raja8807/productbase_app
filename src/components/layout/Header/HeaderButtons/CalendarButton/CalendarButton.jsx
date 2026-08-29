"use client";

import { Calendar } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import styles from "./CalendarButton.module.scss";
import CalendarDropdown from "./CalendarDropdown/CalendarDropdown";

const CalendarButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.CalendarButton} ref={containerRef}>
      <button 
        className={styles.calendarBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Calendar"
      >
        <Calendar size={20} />
      </button>
      
      <CalendarDropdown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CalendarButton;
