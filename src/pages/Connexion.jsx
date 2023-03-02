import { NavLink } from "react-router-dom";

const Connexion = () => {
  return (
      <div className="connexion">
        <h1>Connexion sur Akn Shop</h1>
        <form action="">
          <label htmlFor="mail">Email</label>
          <br />
          <input type="email" name="mail" />
          <br />
          <br />
          <div className="mdp">
            <label htmlFor="mdp">Mot de passe</label>
            <NavLink to="/oublié">Oublié</NavLink>
            <br />
          </div>
          <input type="password" name="mdp" />
          <br />
          <br />
          <input type="submit" id="btn" value="Connexion" />
          <br /><br />
        </form>
        <p className="ins-compte">
          Vous n'avez pas de compte ?{" "}
          <NavLink to="/register"> Inscrivez-vous .</NavLink>
        </p>
      </div>
  );
};

export default Connexion;
