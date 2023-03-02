import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MFemmesList from "../components/MFemmesList";

const MFemmes = () => {
  const femmes = [
    {
      id: 0,
      img: "./chouette-idée-robe-moderne-tenue-africaine-femme-chic-idée-modele-robe-africaine-moderne-chic-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 1,
      img: "./couture-africaine-1-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 2,
      img: "./d857fe1c64e43da5e5e61123b83c4b61-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 3,
      img: "./femmes.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 4,
      img: "./femmesF.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 5,
      img: "./robe-africaine-chic29-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 6,
      img: "./robe-africaine-robe-africaine-chic-jaune-et-rose-afro-nation-m-16065699152008_400x-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 7,
      img: "./robe-africaine-wax-1-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 8,
      img: "./robe-en-pagne-africain-606_1800x1800-1-300x300-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 9,
      img: "./robe-pagne-4-min-1-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 10,
      img: "./robe-soiree-1-min-removebg-preview.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
    {
      id: 11,
      img: "./womanPic.png",
      name: "Robe",
      price: 10000 + " Fcfa",
      add: "Ajouter au panier",
    },
  ];
  return (
    <div>
      <Navigation />
      <h1 className="p-t">Femmes</h1>
      <div className="modeles">
        {femmes.map((femme) => {
          return <MFemmesList key={femme.id} {...femme} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MFemmes;
