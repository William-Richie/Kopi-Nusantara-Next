'use client';

import React from 'react';
import { useStore } from '../context/StoreContext';

export default function Notification() {
  const { notifications } = useStore();

  return (
    <div id="notif-container">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`notif-message ${notif.show ? 'show' : ''}`}
        >
          {notif.message}
        </div>
      ))}
    </div>
  );
}
