import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import Post from './components/Post';
import Header from './containers/Header';
import Form from './containers/Form';
import { AppContainer } from './AppStyles'
import StyleColors from './containers/Colors/stylesColors';
import GlobalStyle from './stylesGlobal';
import HeroSection from './containers/HeroSection';

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>('https://images-americanas.b2w.io/produtos/1320858840/imagens/batman-e-batmobile-batmovel-batman-forever-hollywood-rides-1-24-jada/1320858840_1_xlarge.jpg');

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
  };

  return (
    <ThemeProvider theme={StyleColors}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <HeroSection
          title="Minhas miniaturas do Batmóvel"
          subtitle="Aqui você encontra as melhores miniaturas do Batmóvel"
        />
        <main>
          <Form onImageSelect={handleImageSelect} />
        </main>
        <Post imageUrl={selectedImageUrl}>
          Olha só que legal minhas miniaturas do Batmóvel.
        </Post>
      </AppContainer>
    </ThemeProvider>

  );
}

export default App;
