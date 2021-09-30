import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    address2,
    city,
    zipcode,
    state,
    phone,
    ssn,
    email,
    password,
    dateOfBirth,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
    billingAddress1,
    billingAddress2,
    billingCity,
    billingZipcode,
    billingState,
    plan,
  },
} = checkoutFormModel;

const formInitialValues = {
  [firstName.name]: '',
  [lastName.name]: '',
  [address1.name]: '',
  [city.name]: '',
  [state.name]: '',
  [zipcode.name]: '',
  [phone.name]: '',
  [address2.name]: '',
  [ssn.name]: '',
  [email.name]: '',
  [password.name]: '',
  [dateOfBirth.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: '',
  [billingAddress1.name]: '',
  [billingAddress2.name]: '',
  [billingCity.name]: '',
  [billingState.name]: '',
  [billingZipcode.name]: '',
  [plan.name]: '',
};
export default formInitialValues;
