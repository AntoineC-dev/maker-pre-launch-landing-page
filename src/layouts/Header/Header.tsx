import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import scrollIcon from '../../assets/icon-scroll.svg';

function Header() {
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
        <a href="#products" aria-label="Scroll to products section">
          <img src={scrollIcon} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
