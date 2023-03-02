import { NavLink } from "react-router-dom";

const MFemmesList = ({ img, name, price, add }) => {
  return (
    <div className="modele">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="legend">
        <h2>{name}</h2>
        <p>{price}</p>
        <NavLink to="#">{add}</NavLink>
      </div>
    </div>
  );
};

export default MFemmesList;