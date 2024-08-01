import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

Card.propTypes = {
  card: {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: {
      users: PropTypes.number.isRequired,
      storage: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      help: PropTypes.bool.isRequired,
      project : PropTypes.string.isRequired,
      phone : PropTypes.string.isRequired,
      subDomain : PropTypes.string.isRequired,
      report : PropTypes.string.isRequired,
    },
  },
};

function Card({ card }) {
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${card.plan == 'Enterprise' && 'border-primary'}`}>
        <div className={`card-header py-3 ${card.plan == 'Enterprise' && 'text-bg-primary border-primary'}`}>
          <h4 className="my-0 fw-normal">{card.plan}</h4>
          <h1 className="card-title pricing-card-title">
            ${card.price}
            <small className="text-body-secondary fw-light">/mo</small>
          </h1>
        </div>
        
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            {card.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enable ? (
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> {feature.name}
                    </span>
                  ) : (
                    <span style={{color:'#c2c3c4'}}>
                      <FontAwesomeIcon icon={faXmark} />
                      {feature.name} 
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              card.plan == "Free" && "btn-primary"
            } ${card.plan == "Plus" && "btn-primary"}
             ${card.plan == "Pro" && "btn-primary"}`}
          >
              SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;