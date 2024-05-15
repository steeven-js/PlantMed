const NotificationsData = [
  {
    id: 1,
    day: 'Today',
    notifications: [
      {
        id: 1,
        avatarImage: require('../assets/icons/png/notifications/image_order_delivered.png'),
        notificationTitle: 'Order delivered!',
        notificationMessage:
          'We are delighted to inform you that your order has been successfully delivered to your doorstep.',
        notificationAge: '10 minutes ago',
      },
      {
        id: 2,
        avatarImage: require('../assets/icons/png/notifications/image_delivery_truck.png'),
        notificationTitle: 'On the way!',
        notificationMessage:
          'Hello! This is a quick update regarding your order delivery. We wanted to let you know that your package has been picked up and is on its way to you.',
        notificationAge: '15 minutes ago',
      },
    ],
  },
  {
    id: 2,
    day: 'Yesterday',
    notifications: [
      {
        id: 1,
        avatarImage: require('../assets/icons/png/notifications/image_order_delivered.png'),
        notificationTitle: 'Order delivered!',
        notificationMessage:
          'We are pleased to inform you that your order has been successfully delivered to the address you provided.',
        notificationAge: '1 day ago',
      },
      {
        id: 2,
        avatarImage: require('../assets/icons/png/notifications/image_order_confirmed.png'),
        notificationTitle: 'Order confirmed!',
        notificationMessage:
          'Thank you for your recent purchase! We are writing to confirm that your order has been received and is currently being processed.',
        notificationAge: '1 day ago',
      },
      {
        id: 3,
        avatarImage: require('../assets/icons/png/notifications/image_order_cancelled.png'),
        notificationTitle: 'Order cancelled!',
        notificationMessage:
          'We regret to inform you that your order has been cancelled. We apologize for any inconvenience this may have caused.',
        notificationAge: '1 day ago',
      },
    ],
  },
];

// Exporting
export default NotificationsData;
