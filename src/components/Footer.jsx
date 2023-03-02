const Footer = () => {
  return (
    <div className="footer">
      <div className="adresse p25">
        <h4>Contact du dev</h4>
        <p>Contact du support +229 61 22 50 71</p>
        <p>N° Secondaire : +229 65 59 99 74</p>
        <p>© Tous droits réservés. Réaliser par Akn Tech</p>
      </div>
      <div className="mail p25">
        <h4>Abonnement</h4>
        <p>Pour recevoir les dernières offres et remises de la boutique.</p>
        <form action="">
          <input type="email" name="mail" placeholder="Votre email" id="mail" />
          <input type="submit" id="btn" value="Envoyer" />
        </form>
      </div>
      <div className="paiemant p25">
        <h4>Méthodes de paiement</h4>
        <p>Nous acceptons l'une des méthodes de paiement suivantes.</p>
        <img src="./paiement.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
