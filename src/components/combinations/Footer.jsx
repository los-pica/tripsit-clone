import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="factsheets">
        <p>
          The app, like the combo chart, is meant as a quick reference guide and
          additional research <b>MUST</b> always be done. For additional
          information check out our{" "}
          <Link to="/factsheets">
            <b>Factsheet</b>
          </Link>
          .
        </p>
      </div>
      <div className="attributions">
        <p>
          For re-use and attribution info see{" "}
          <Link to="https://wiki.tripsit.me/wiki/Drug_combinations#Use_.26_Attribution">
            <b>here</b>
          </Link>
          .
        </p>
      </div>
      <div className="suggestions">
        <p>
          Notice something wrong with this page?{" "}
          <Link to="/contact">Let us know!</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
