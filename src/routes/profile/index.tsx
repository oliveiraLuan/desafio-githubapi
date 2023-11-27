import Header from "../../components/Header";
import "./styles.css";
import * as githubService from '../services/GithubService';
import { useState } from "react";
import { UserDTO } from "../../models/UserDTO";
import ProfileDetails from "../../components/ProfileDetails";

export default function Profile() {
  type FormData = {
    user: string;
  };

  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const [user, setUser] = useState<UserDTO>();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  const errorElement = document.getElementById("errorH2");

  function handleBtn(event : any){
      event.preventDefault();
      githubService.findUser(formData.user).then(response => {
          setUser(response.data);
          errorElement.innerHTML = "";
      }).catch(() => {
          setUser(undefined);
          errorElement.innerHTML = "Erro ao buscar o usuário";
      });
  }

  return (
    <>
      <Header />
      <section className="profile-section">
        <form>
          <div className="container">
            <h2 className="title-container">Encontre um perfil Github</h2>
            <input
              name="user"
              value={formData.user}
              className="inputUser"
              type="text"
              placeholder="Usuário Github"
              onChange={handleInputChange}
            />
            <button onClick={handleBtn}>Encontrar</button>
          </div>
        </form>
      </section>
      <section className="result-section">
           <h2 id="errorH2"></h2>
          {user && <ProfileDetails  user={user}/>}
      </section>
    </>
  );
}
