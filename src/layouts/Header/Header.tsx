import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import scrollIcon from '../../assets/icon-scroll.svg';

function Header() {
  const scrollMainToContent = () => console.log('Scroll to main content');
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Maker's logo" />
      </div>
      <div className={styles.content}>
        <h1>
          Get paid for the work you <span className="text-accent">love</span> to do.
        </h1>
        <p>
          The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to
          escape the rat race or set up a side hustle, we’ve got you covered.
        </p>
        <button onClick={scrollMainToContent} aria-label="Scroll to main content">
          <img src={scrollIcon} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
