import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MEnfantsList from "../components/MEnfantsList";

const MEnfants = () => {
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
    {
      id: 4,
      img: "./d0553e50da6abbca97a351e6bd4f91c8-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: "./garçons.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: "./fillettes.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: "./Robe-africaine-en-dentelle-pour-filles-v-tements-africains-col-rond-robe-de-princesse-imprim-e-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: "./V-tements-traditionnels-africains-pour-enfants-nouvelle-mode-Dashiki-jolies-robes-pour-filles-volants-Bazin-WYT119.jpg_640x640-removebg-preview (1).png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: "./V-tements-africains-pour-enfants-Dashiki-en-cire-de-coton-costume-pour-enfants-Shorts-d-contract-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: "./d0553e50da6abbca97a351e6bd4f91c8-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: "./e03955c106bdae884d4703002dce0d11-removebg-preview.png",
      name: "Tenu enfant",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Enfants</h1>
      <div className="modeles">
        {enfants.map((enfant) => {
          return <MEnfantsList key={enfant.id} {...enfant} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MEnfants;
