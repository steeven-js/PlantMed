import Alert from '../../components/alerts/Alert';

// Functional component
const PageNotFound = () => {
  // Returning
  return (
    <Alert
      lottieFile={require('../../assets/lottie/page_not_found.json')}
      problemTitle="Page not found!"
      problemInfo="The page you are looking for doesn't exist."
    />
  );
};

// Exporting
export default PageNotFound;
