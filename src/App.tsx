import styles from './App.module.css';
import { Header, Products } from './layouts';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Products />
    </div>
  );
}

export default App;
