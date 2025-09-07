import './style.css'
import logo from "../../img/logo_challenge_book_store.webp";

function Logo() {
  return (
    <div className= "logo">
      <img src={logo} alt="logo challenge book store"></img>
      <p>Challenge Book Store</p>
    </div>
  );
}
export default Logo;