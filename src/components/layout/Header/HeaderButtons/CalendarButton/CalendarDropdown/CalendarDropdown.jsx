import React from "react";
import styles from "./CalendarDropdown.module.scss";
import { Plus, Clock, Video } from "lucide-react";
import Link from "next/link";

const mockEvents = [
  {
    id: 1,
    title: "Team Sync",
    time: "10:00 AM - 11:00 AM",
    type: "video",
  },
  {
    id: 2,
    title: "Client Presentation",
    time: "1:00 PM - 2:30 PM",
    type: "meeting",
  },
  {
    id: 3,
    title: "Project Review",
    time: "4:00 PM - 5:00 PM",
    type: "video",
  }
];

const CalendarDropdown = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.CalendarDropdown} ${isOpen ? styles.show : ""}`}
      id="calendarDropdown"
    >
      <div className={styles.header}>
        <div className={styles.title}>
          <h6>Today's Schedule</h6>
          <small>3 upcoming</small>
        </div>
        <button className={styles.addBtn} onClick={onClose} title="Add Event">
          <Plus size={16} />
        </button>
      </div>

      <div className={styles.eventsList}>
        {mockEvents.map((event) => (
          <div key={event.id} className={styles.eventItem}>
            <div className={styles.timeBox}>
              <Clock size={14} />
              <span>{event.time.split(" - ")[0]}</span>
            </div>
            <div className={styles.details}>
              <h5>{event.title}</h5>
              <p>
                {event.type === "video" ? <Video size={12} /> : null}
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Link href="/" onClick={onClose}>
          View Full Calendar
        </Link>
      </div>
    </div>
  );
};

export default CalendarDropdown;
