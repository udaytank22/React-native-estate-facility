import {
  Profile2,
  Residents,
  Staff,
  Security,
  Complaint,
  Business,
  Bill,
  QrCode,
} from '../Constant/Images';

// countryCodes.ts
export const countryCodes = [
  { code: 'IN', dial_code: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'US', dial_code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', dial_code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AU', dial_code: '+61', flag: '🇦🇺', name: 'Australia' },
];

export const businessData = [
  {
    id: 1,
    title: 'Shreeji Saree',
    tag: 'Business',
    owner: 'Ramesh Mehta',
    flat: 'B-104',
    address: 'B:102 Om township-2, Vastral',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
  {
    id: 2,
    title: 'Om Super Market',
    tag: 'Shop',
    owner: 'Kiran Patel',
    flat: 'A-203',
    address: 'Sunshine Residency, Nikol',
  },
  {
    id: 3,
    title: 'Mehta Electronics',
    tag: 'Business',
    owner: 'Jay Mehta',
    flat: 'C-310',
    address: 'Silver Plaza, Maninagar',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
  {
    id: 4,
    title: 'Mehta Electronics',
    tag: 'Business',
    owner: 'Jay Mehta',
    flat: 'C-310',
    address: 'Silver Plaza, Maninagar',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
  {
    id: 5,
    title: 'Mehta Electronics',
    tag: 'Business',
    owner: 'Jay Mehta',
    flat: 'C-310',
    address: 'Silver Plaza, Maninagar',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
  {
    id: 6,
    title: 'Mehta Electronics',
    tag: 'Business',
    owner: 'Jay Mehta',
    flat: 'C-310',
    address: 'Silver Plaza, Maninagar',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
];

export const businessOwnerData = [
  {
    id: 1,
    title: 'Shreeji Saree',
    tag: 'Business',
    owner: 'Ramesh Mehta',
    flat: 'B-104',
    address: 'B:102 Om township-2, Vastral',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
  {
    id: 2,
    title: 'Shreeji Saree',
    tag: 'Business',
    owner: 'Ramesh Mehta',
    flat: 'B-104',
    address: 'B:102 Om township-2, Vastral',
    image: require('../../Assets/Image/Tice_1.jpg'),
  },
];

export const propertyList = [
  {
    id: 'B-105',
    name: 'Ravi Mehta',
    type: 'Rent',
    houseType: 'Flat 3BHK',
    builtUpArea: '780 sqft',
    houseNumber: 'B-102',
    furnishing: 'Unfurnished',
    bachelorsAllowed: 'No',
    listedBy: 'Owner',
    ownerName: 'Ravi Mehta',
    price: '₹20,000/Month',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vitae fames sit proin iaculis. Ac phasellus ipsum faucibus placerat. Urna tortor risus sapien scelerisque. Egestas accumsan nunc proin est eu sapien id. Nisi quis ut leo ullamcorper massa sed vulputate cursus magna.',
    terms:
      'Lorem ipsum dolor sit amet consectetur. Vitae fames sit proin iaculis. Ac phasellus ipsum faucibus placerat. Urna tortor risus sapien scelerisque. Egestas accumsan nunc proin est eu sapien id. Nisi quis ut leo ullamcorper massa sed vulputate cursus magna.',
    images: [
      require('../../Assets/Image/Property1.jpg'),
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property4.jpg'),
    ],
  },
  {
    id: 'C-202',
    name: 'Neha Sharma',
    type: 'Sell',
    houseType: 'Flat 2BHK',
    builtUpArea: '650 sqft',
    houseNumber: 'C-202',
    furnishing: 'Semi-Furnished',
    bachelorsAllowed: 'Yes',
    listedBy: 'Agent',
    ownerName: 'Neha Sharma',
    price: '₹35,00,000',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec ultricies velit ut felis posuere, sit amet sagittis metus porta.',
    terms:
      'All transactions are subject to verification. Agreement will be registered under RERA guidelines.',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
  {
    id: 'C-203',
    name: 'Neha Sharma',
    type: 'Rent',
    houseType: 'Flat 1BHK',
    builtUpArea: '480 sqft',
    houseNumber: 'C-203',
    furnishing: 'Furnished',
    bachelorsAllowed: 'Yes',
    listedBy: 'Owner',
    ownerName: 'Neha Sharma',
    price: '₹12,000/Month',
    description:
      'Spacious and well-lit 1BHK perfect for working professionals or couples. Located near metro station.',
    terms:
      'Security deposit of 2 months required. Rent agreement minimum of 11 months.',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
  {
    id: 'C-204',
    name: 'Neha Sharma',
    type: 'Sell',
    houseType: 'Villa 4BHK',
    builtUpArea: '1800 sqft',
    houseNumber: 'C-204',
    furnishing: 'Fully Furnished',
    bachelorsAllowed: 'No',
    listedBy: 'Builder',
    ownerName: 'Neha Sharma',
    price: '₹85,00,000',
    description:
      'Luxurious villa with modern amenities and a private garden. Ideal for families looking for a premium lifestyle.',
    terms:
      'Booking amount non-refundable. Final registry charges to be borne by the buyer.',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
  {
    id: 'C-205',
    name: 'Neha Sharma',
    type: 'Sell',
    houseType: 'Flat 2BHK',
    builtUpArea: '720 sqft',
    houseNumber: 'C-205',
    furnishing: 'Unfurnished',
    bachelorsAllowed: 'Yes',
    listedBy: 'Owner',
    ownerName: 'Neha Sharma',
    price: '₹28,00,000',
    description:
      'Affordable 2BHK with easy access to schools and hospitals. Perfect for small families.',
    terms:
      'Buyer to bear maintenance charges from date of possession. Loan facility available.',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
  {
    id: 'C-206',
    name: 'Neha Sharma',
    type: 'Sell',
    houseType: 'Flat 3BHK',
    builtUpArea: '950 sqft',
    houseNumber: 'C-206',
    furnishing: 'Semi-Furnished',
    bachelorsAllowed: 'No',
    listedBy: 'Agent',
    ownerName: 'Neha Sharma',
    price: '₹42,00,000',
    description:
      'Spacious 3BHK with ample ventilation and modern design. Located in a gated society.',
    terms: 'Stamp duty and registration extra. Maintenance to be paid yearly.',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
];

export const ownerpropertyList = [
  {
    id: 'C-202',
    name: 'Neha Sharma',
    type: 'Sell',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
  {
    id: 'C-203',
    name: 'Neha Sharma',
    type: 'Rent',
    images: [
      require('../../Assets/Image/Property2.jpg'),
      require('../../Assets/Image/Property4.jpg'),
      require('../../Assets/Image/Property3.jpg'),
      require('../../Assets/Image/Property1.jpg'),
    ],
  },
];

export const UserData = [
  {
    id: 1,
    name: 'DigiWave',
    password: '1234',
    role: 'user',
  },
  {
    id: 2,
    name: 'DigiWave',
    password: '12345',
    role: 'subAdmin',
  },
];

export const GateUpdateData = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    Flat: 'B-104',
    In: '4:00 AM',
    Out: '10:25 AM',
    type: 'Delivery',
  },
  {
    id: 2,
    name: 'Kajal Maheta',
    Flat: 'B-204',
    In: '10:15 AM',
    Out: '10:25 PM',
    type: 'Guest',
  },
];

export const VehicleData = [
  {
    id: 1,
    name: 'GJ1 AB 2345',
    Flat: 'B-204',
    In: '10:15 AM',
    Out: '10:25 PM',
    type: 'Delivery',
  },
  {
    id: 2,
    name: 'GJ1 AB 5599',
    Flat: 'B-303',
    In: '10:15 AM',
    Out: 'Pending',
    type: 'Guest',
  },
];

export const StaffData = [
  {
    id: 1,
    name: 'Sunikta',
    Flat: 'B-204, B-303',
    In: '10:15 AM',
    Out: '10:25 PM',
    type: 'House Help',
  },
];

export const DeniedData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    Flat: 'Book Seller',
    In: '02:00 PM',
    type: 'Denied',
  },
];

export const socityContact = [
  {
    id: 1,
    name: 'Ashok Sharma',
    icon: Profile2,
    contact: '+91 99523 23568',
  },
  {
    id: 2,
    name: 'Abhinav Pandey',
    icon: Profile2,
    contact: '+91 96253 86564',
  },
];

export const tabs = [
  { id: 1, label: 'Residents', icon: Residents, bgColor: '#e6f4ff' },
  { id: 2, label: 'Staff', icon: Staff, bgColor: '#e6f4ff' },
  { id: 3, label: 'Security', icon: Security, bgColor: '#e6f4ff' },
  { id: 4, label: 'Complaint', icon: Complaint, bgColor: '#ffe7e6' },
  {
    id: 5,
    label: 'Business',
    icon: Business,
    bgColor: 'rgba(254,178,55,0.1)',
  },
  { id: 6, label: 'Bills', icon: Bill, bgColor: 'rgba(254,178,55,0.1)' },
];

export const GeneralFees = [
  {
    id: 1,
    name: 'Parking Fees',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Paid',
  },
  {
    id: 2,
    name: 'Electricity Bill',
    amount: '₹2500',
    dueDate: '03 Mar 2025',
    status: 'Unpaid',
  },
];

export const MaintananceBill = [
  {
    name: 'MB-782',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Paid',
    month: 'August 2025',
  },
];

export const MaintanceCardBillBlockWise = [
  {
    id: 1,
    Billid: 'MB-782',
    flat: 'A-103',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Unpaid',
    penalty: '₹200',
    month: 'August 2025',
  },
  {
    id: 2,
    Billid: 'MB-783',
    flat: 'A-104',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Paid',
    penalty: '₹0',
    month: 'August 2025',
  },
  {
    id: 3,
    Billid: 'MB-783',
    flat: 'A-104',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Paid',
    penalty: '₹0',
    month: 'August 2025',
  },
  {
    id: 4,
    Billid: 'MB-783',
    flat: 'A-104',
    amount: '₹2500',
    dueDate: '05 Sep 2025',
    status: 'Paid',
    penalty: '₹0',
    month: 'August 2025',
  },
];

export const VisitPassData = [
  {
    id: 1,
    passid: 'Gp-4567',
    icon: QrCode,
    name: 'Rahul Sharma',
    Flat: 'B-204',
    purpose: 'House Cleaning',
    valid: '30 September',
    status: 'Active',
  },
  {
    id: 2,
    passid: 'Gp-4567',
    name: 'Rahul Sharma',
    Flat: 'B-204',
    icon: QrCode,
    purpose: 'House Cleaning',
    valid: '30 September',
    status: 'Active',
  },
];

export const PersonalVehicleData = [
  {
    id: 1,
    name: 'GJ1 AB 2345',
    Flat: 'B-204',
    modal: 'Honda City',
    color: 'White',
    type: 'Car',
    parking: 'P-12',
    contact: '9876543210',
  },
  {
    id: 2,
    name: 'GJ1 AB 5555',
    Flat: 'B-204',
    modal: 'Pulser',
    type: 'Bike',
    color: 'White',
    parking: 'P-12',
    contact: '9876543210',
  },
  {
    id: 3,
    name: 'GJ1 AB 5555',
    Flat: 'B-204',
    modal: 'Pulser',
    type: 'Bike',
    color: 'White',
    parking: 'P-12',
    contact: '9876543210',
  },
];

export const FamilyMemberData = [
  {
    id: 1,
    name: 'Ananya Sharma',
    relation: 'wife',
    gender: 'female',
    mobileNo: '9876543210',
    contact: '9876543210',
  },
  {
    id: 2,
    name: 'Ansh Sharma',
    relation: 'son',
    gender: 'male',
    mobileNo: '9876543210',
    contact: '9876543210',
  },
];

export const Document = [
  {
    id: 1,
    title: 'Aadhar card.pdf',
  },
  {
    id: 2,
    title: 'Pan card.pdf',
  },
];

export const shopData = [
  {
    name: 'Raghuvir Soda Shop',
    ImageComp: require('../../Assets/Image/Tice_1.jpg'), // Corrected import
    selected: true,
  },
  {
    name: 'Anjana Ice-cream Shop',
    ImageComp: require('../../Assets/Image/Tice_1.jpg'),
    selected: false,
  },
  {
    name: 'Anjana Ice-cream Shop',
    ImageComp: require('../../Assets/Image/Tice_1.jpg'),
    selected: false,
  },
  {
    name: 'Anjana Ice-cream Shop',
    ImageComp: require('../../Assets/Image/Tice_1.jpg'),
    selected: false,
  },
];
