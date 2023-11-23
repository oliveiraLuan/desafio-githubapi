import Header from "../../components/Header";
import './styles.css';
export default function Home(){
    return (
        <>
            <Header/>
            <main className="home-section">
                <h2>Desafio Github API</h2>
                <p className="subtitle">DevSuperior - Escola de programação</p>
                <button className="btn-start">Começar</button>
            </main>
        </>
    );
}