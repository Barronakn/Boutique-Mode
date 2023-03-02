import { NavLink } from "react-router-dom";

const Inscription = () => {
  return (
    <div className="inscriptionContainer">
      <div className="logo">
        <NavLink className="navActive" to="/">
          Akn <span>Shop</span>
        </NavLink>
      </div>
      <div className="inscription">
        <div className="left">
          <h1>Des données clients toujours sécurisées et conformes</h1>
        </div>
        <div className="right">
          <h1>Inscrivez sur Akn Shop</h1>
          <form action="">
            <label htmlFor="">Nom</label>
            <br />
            <input type="text" name="" />
            <br />
            <br />
            <label htmlFor="">E-mail</label>
            <br />
            <input type="email" name="" />
            <br />
            <br />
            <label htmlFor="">Mot de passe</label>
            <br />
            <input type="password" name="" />
            <br />
            <br />
            <label htmlFor="">Confirmer mot de passe</label>
            <br />
            <input type="password" name="" />
            <br />
            <br />
            <input type="submit" id="btn" value="Connexion" /><br /><br />
          </form>
          <p>
            Vous avez déjà un compte?{" "}
            <NavLink to="/login"> Connectez-vous .</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
