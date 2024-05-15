import Alert from '../../components/alerts/Alert';

// Functional component
const NoData = () => {
  // Returning
  return (
    <Alert
      lottieFile={require('../../assets/lottie/searching.json')}
      problemTitle="No data!"
      problemInfo="Sorry, no data was found for your search query."
    />
  );
};

// Exporting
export default NoData;
