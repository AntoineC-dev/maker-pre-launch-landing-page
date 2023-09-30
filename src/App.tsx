import styles from './App.module.css';
import { Header, Newsletter, Offers, Products } from './layouts';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Products />
      <Offers />
      <Newsletter />
    </div>
  );
}

export default App;
