import Alert from '../../components/alerts/Alert';

// Functional component
const NoNotifications = () => {
  // Returning
  return (
    <Alert
      lottieFile={require('../../assets/lottie/no_notification.json')}
      problemTitle="No notification!"
      problemInfo="You don't have any notifications right now."
    />
  );
};

// Exporting
export default NoNotifications;
