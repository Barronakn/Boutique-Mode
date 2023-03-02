import MCouplesList from "../components/MCouplesList";
import { NavLink } from "react-router-dom";

const Couples = () => {
  const couples = [
    {
      id: 0,
      img: "./WhatsApp_Image_2023-02-25_at_16.54.46-removebg-preview (1).png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: "./WhatsApp_Image_2023-02-25_at_16.54.46__1_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: "./WhatsApp_Image_2023-02-25_at_16.54.46__2_-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: "./WhatsApp_Image_2023-02-25_at_16.54.47-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <h1 className="text">Couples</h1>
      <div className="modeles">
        {couples.map((couple) => {
          return <MCouplesList key={couple.id} {...couple} />;
        })}
      </div>
      <div className="seeMore">
        <NavLink to="/modèlescouples">Voir plus</NavLink>
      </div>
    </div>
  );
};

export default Couples;
