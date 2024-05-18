import Post from "./components/Post";

import styles from './App.module.css';
import Header from "./containers/Header";
import Form from "./containers/Form";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Form />
      </main>
      <Post imageUrl="https://cdn.awsli.com.br/800x800/2571/2571273/produto/223761759/000-6uk7sahybk.jpg">
        Olha só que legal minhas miniaturas do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
