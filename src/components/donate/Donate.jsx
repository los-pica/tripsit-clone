import React from "react";
import PaymentMetods from "./PaymentMetods"
import { Link } from "react-router-dom";
import "./donate.scss"

const Donate = () => {
  return (
    <content>
      <div className="donate">
        <h1>Donate</h1>
        <p>
          TripSit is powered by a group of volunteers who believe in one thing,
          helping people. By support us you are not only supporting this
          network, but you are supporting those who we aim to help.
        </p>
      </div>
      <div className="team">
        <h1>Join our team</h1>
        <p>
          If you are like us and have a desire to help people, you may be just
          what we are looking for. We are always looking for new TripSit Team
          members. <Link to="/contact"><b>Contact Us</b></Link> to learn more about what it means to be part of
          TripSit.
        </p>
      </div>
      <div className="support">
        <h1>Support</h1>
        <p>
          You can also help TripSit by donating money to support our non-profit
          status. Our goal for raising this money will provide us the ability to
          file for non-profit status. With that status we can write for grants,
          take tax free donations, and fund raise to gain additional funding to
          help people in real world situations. Our ultimate goal is to provide
          people a service such as free professional drug counselling, addiction
          counselling, group therapy, and other life changing techniques while
          supporting a non judgemental attitude to those individuals. We also
          hope to expand our community involvement through website services that
          offer people a outlet to express themselves through art, blogging, and
          chatting.
        </p>
      </div>
      <div className="payment-methods">
        <PaymentMetods/>
      </div>
    </content>
  );
};

export default Donate;
