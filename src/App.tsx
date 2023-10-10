import styles from './App.module.css';
import { Header, Newsletter, Offers, Products } from './layouts';

function App() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Products />
      <Offers />
      <Newsletter />
    </main>
  );
}

export default App;
