import React from "react";
import { Link } from "react-router-dom";

import "./CreateCard.css";

const CreateCard = () => {
  return (
    <li className="create-item">
      <div className="create-flipcard">
        <div className="create-flipcard__inner">
          <div className="create-flipcard__front">
            <h1 className="create-flipcard__front__title">CREATE</h1>
          </div>
          <Link to="/create/modules">
            <div className="create-flipcard__back">
              <p>
                <b>How To Create:</b> <br /> <br />
                Input your modules and click create! Use the information given
                to you and finish your timetable at NUSMods.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CreateCard;
