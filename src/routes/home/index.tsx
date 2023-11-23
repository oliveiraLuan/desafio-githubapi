import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";
export default function Home() {
  return (
    <>
      <Header />
      <main className="home-section">
        <div className="home-container">
          <h2 className="title">Desafio Github API</h2>
          <p className="subtitle">DevSuperior - Escola de programação</p>
          <NavLink to="profile">
            <div>
              <button className="btn-start">Começar</button>
            </div>
          </NavLink>
        </div>
      </main>
    </>
  );
}
