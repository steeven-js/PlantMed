import Alert from '../../components/alerts/Alert';

// Functional component
const NoInternet = () => {
  // Returning
  return (
    <Alert
      lottieFile={require('../../assets/lottie/no_wifi.json')}
      problemTitle="No internet!"
      problemInfo="Seems you have lost your internet connection."
    />
  );
};

// Exporting
export default NoInternet;
