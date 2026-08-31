"use client";

import React from "react";
import styles from "./NotificationsList.module.scss";
import { Check, Info, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const mockNotifications = [
  { 
    id: 1, 
    type: "success", 
    title: "Project Approved", 
    desc: "The ProductBaseject was approved.", 
    time: "2 min ago", 
    unread: true 
  },
  { 
    id: 2, 
    type: "warning", 
    title: "Payment Pending", 
    desc: "Invoice #2301 is pending review.", 
    time: "1 hour ago", 
    unread: true 
  },
  { 
    id: 3, 
    type: "info", 
    title: "New Message", 
    desc: "Alice sent you a direct message.", 
    time: "3 hours ago", 
    unread: false 
  },
];

const NotificationsList = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.NotificationsListBox}>
      <div className={styles.header}>
        <h6>Notifications</h6>
        <button className={styles.markReadBtn} onClick={onClose}>
          <Check size={14} /> Mark all read
        </button>
      </div>
      
      <div className={styles.list}>
        {mockNotifications.map((notif) => (
          <div key={notif.id} className={`${styles.item} ${notif.unread ? styles.unread : ""}`}>
            <div className={`${styles.iconBox} ${styles[notif.type]}`}>
               {notif.type === 'success' && <CheckCircle size={16} />}
               {notif.type === 'warning' && <AlertTriangle size={16} />}
               {notif.type === 'info' && <Info size={16} />}
            </div>
            <div className={styles.content}>
               <div className={styles.title}>{notif.title}</div>
               <div className={styles.desc}>{notif.desc}</div>
               <div className={styles.time}>
                 <Clock size={12} /> {notif.time}
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer} onClick={onClose}>
         View all notifications
      </div>
    </div>
  );
};

export default NotificationsList;
