import Patreon from "../../assets/images/patreon.png";
import Paypal from "../../assets/images/paypal.png";
import Bitcoin from "../../assets/images/bitcoin.png";
import { Link } from "react-router-dom";
import "./paymentMetods.scss";

const paymentOptions = [
  {
    id: "patreon",
    img: Patreon,
    href: "/*insert link*/",
  },
  {
    id: "paypal",
    img: Paypal,
    href: "/*insert link*/",
  },
  {
    id: "bitcoin",
    img: Bitcoin,
    href: "/*insert link*/",
  },
];

const PaymentMetods = () => {
  return (
    <div className="payment-methods">
      {paymentOptions.map((option) => (
        <Link className="payment" to={option.href} >
          <img src={option.img} alt={option.id}/>
        </Link>
      ))}
    </div>
  );
};

export default PaymentMetods;
