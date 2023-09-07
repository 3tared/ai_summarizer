import { logo } from '../assets';

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center mb-10 pt-4 ">
      <img src={logo} alt="sumzLogo" className="w-28 object-contain" />
      <button
        type="button"
        className="black_btn"
        onClick={() => window.open('https://github.com/3tared/ai_summarizer')}
      >
        My GitHub
      </button>
    </nav>
  );
}

export default Navbar;
