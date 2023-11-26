import Header from "../../components/Header";
import "./styles.css";
import * as githubService from '../services/GithubService';
import { useState } from "react";

export default function Profile() {
  type FormData = {
    user: string;
  };

  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleBtn(event : any){
      event.preventDefault();
      githubService.findUser(formData.user);
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
    </>
  );
}
