const OrdersData = [
  {
    id: 1,
    productImage: require('../assets/images/products/300_x_400.png'),
    productTitle: 'Strelitza Nicolai',
    moreProductsCount: 5,
    status: 'On the way',
    statusTextColor: '#00a896',
    statusBgColor: '#00a89610',
    rating: null,
    orderDate: '25 March, 2024',
    deliveryDate: '29 March, 2024',
  },
  {
    id: 2,
    productImage: require('../assets/images/products/300_x_400.png'),
    productTitle: 'Alocasia Odora',
    moreProductsCount: 3,
    status: 'Delivered',
    statusTextColor: '#38b000',
    statusBgColor: '#38b00010',
    rating: 5,
    orderDate: '15 March, 2024',
    deliveryDate: '18 March, 2024',
  },
  {
    id: 3,
    productImage: require('../assets/images/products/300_x_400.png'),
    productTitle: 'Aspidistra Elatior',
    moreProductsCount: 2,
    status: 'Cancelled',
    statusTextColor: '#ef233c',
    statusBgColor: '#ef233c10',
    rating: null,
    orderDate: '10 March, 2024',
    deliveryDate: '19 March, 2024',
  },
  {
    id: 4,
    productImage: require('../assets/images/products/300_x_400.png'),
    productTitle: 'Nailo Elatior',
    moreProductsCount: 4,
    status: 'On hold',
    statusTextColor: '#ff9f1c',
    statusBgColor: '#ff9f1c10',
    rating: null,
    orderDate: '08 March, 2024',
    deliveryDate: '02 May, 2024',
  },
];

// Exporting
export default OrdersData;
