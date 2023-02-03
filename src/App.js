import styles from './App.module.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <hr className={styles.horizontalRule} />
      <Body />
    </div>
  );
}

export default App;
