import { Link } from "react-router-dom";

function Header() {

    return (
      <>
        <header className="develop">
            <div className="container flex">
                <div className="logo">
                    <h1>Main Logo</h1>
                </div>

                <nav className="n-content">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="">Clientes</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      </>
    )
  }
  
  export default Header
  