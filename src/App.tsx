import styles from './App.module.css';
import { Header, Offers, Products } from './layouts';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Products />
      <Offers />
    </div>
  );
}

export default App;
