import "./styles.css";
import { UserDTO } from "../../models/UserDTO";

export type ProfileDetails = {
  user: UserDTO;
};

export default function ProfileDetails({ user }) {
  return (
    <>
      <div className="container-profile">
        <img className="avatar" src={user.avatar_url} alt="Imagem do perfil" />
        <div className="container-profile-info">
          <h3>Informações</h3>

          <div className="item-info">
            <p className="item-key">Perfil:</p>
            <a href={user.url}> {user.url}</a>
          </div>
          <div className="item-info">
            <p className="item-key">Seguidores:</p> {user.followers}
          </div>
          <div className="item-info">
            <p className="item-key">Localidade:</p> {user.location}
          </div>
          <div className="item-info">
            <p className="item-key">Nome:</p>
            {user.name}
          </div>
        </div>
      </div>
    </>
  );
}
