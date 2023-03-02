import MEnfantsList from "../components/MEnfantsList";
import { NavLink } from "react-router-dom";

const Enfants = () => {
  const enfants = [
    {
      id: 0,
      img: "./451c46215fb3ffb5a957053950b1b1a8-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: "./528e3953ef4bba7ed22847356c92f8e0--african-attire-african-wear-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: "./672544b5db4af05ec4724ac4b493fc17-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: "./Robes-avec-chapeau-pour-petites-filles-100-coton-imprim-africain-v-tements-pour-enfants-Bazin-Riche.jpg_640x640-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <h1 className="text">Enfants</h1>
      <div className="modeles">
        {enfants.map((enfant) => {
          return <MEnfantsList key={enfant.id} {...enfant} />;
        })}
      </div>
      <div className="seeMore">
        <NavLink to="/modèlesenfants">Voir plus</NavLink>
      </div>
    </div>
  );
};

export default Enfants;
