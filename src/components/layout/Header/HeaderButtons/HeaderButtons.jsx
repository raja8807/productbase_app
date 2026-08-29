import React from 'react'
import styles from './HeaderButtons.module.scss'
import { MessageCircle } from 'lucide-react'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import CalendarButton from './CalendarButton/CalendarButton'

const HeaderButtons = () => {
  return (
    <div className={styles.HeaderButtons}>
      <CalendarButton />
      <NotificationsButton />
      <MessageCircle size={20} />
    </div>
  )
}

export default HeaderButtons
