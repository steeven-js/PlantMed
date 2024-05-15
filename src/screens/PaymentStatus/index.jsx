import {useState} from 'react';
import Alert from '../../components/alerts/Alert';

// Functional component
const PaymentStatus = () => {
  // Local state
  const [status, setStatus] = useState(false);

  // Returning
  return (
    <Alert
      lottieFile={
        status
          ? require('../../assets/lottie/checkmark.json')
          : require('../../assets/lottie/warning.json')
      }
      problemTitle={status ? 'Payment successful!' : 'Payment failed!'}
      problemInfo={
        status
          ? 'We are pleased to inform you that your payment for order #123456 has been placed.'
          : 'We regret to inform you that the payment for your order has failed.'
      }
    />
  );
};

// Exporting
export default PaymentStatus;
