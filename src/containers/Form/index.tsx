
import React from 'react';
import { ImageGallery, ImageItem } from './styles';

type ImageGalleryComponentProps = {
  onImageSelect: (imageUrl: string) => void;
};

const ImageGalleryComponent = ({ onImageSelect }: ImageGalleryComponentProps) => {
  const imageUrls = [
    'https://imgs.casasbahia.com.br/1562309461/4xg.jpg',
    'https://a-static.mlcdn.com.br/800x560/carrinho-hot-wheels-batmovel-branco-the-flash-series-mattel/toysteam/027084120134hw-hkj74/642148b43ca5ac22d4c236871f8fde10.jpeg',
    'https://http2.mlstatic.com/D_NQ_NP_2X_739485-MLB50373678276_062022-F.webp',
    'https://m.media-amazon.com/images/I/81d42rGUMuL._AC_SY879_.jpg',
    'https://a-static.mlcdn.com.br/800x560/hot-wheels-the-batman-batmobile-prata-batmovel-mattel-gtb55/toysteam/027084120134hw-gtb55/25d222a8fd6f558d7fe0e9589edfb55c.jpeg',
    'https://http2.mlstatic.com/D_NQ_NP_2X_797358-MLB72283791477_102023-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_671365-MLB71943161294_092023-F.webp',
    /*Até aqui Hot Wheels*/
    'https://a-static.mlcdn.com.br/800x560/batmovel-carro-do-batman-dc-comics-bat-movel-original-spin-master-sunny-40cm/wincolecionaveis/235p/f2fc30362b9ec0a01a4758147e7337ce.jpg',
    'https://images.tcdn.com.br/img/img_prod/1119462/batmovel_e_boneco_batman_10cm_luz_e_som_the_batman_o_filme_146987157_1_dbc5a85d67e464469486bd6afe1724b9.jpg', 'https://m.media-amazon.com/images/I/61xlkw4cX0L._AC_SX679_.jpg', 'https://veentx.com/cdn/shop/files/1_d7654bc0-4690-4c4a-90f8-a8d23155e327.png?v=1684450027&width=1100', 'https://facilshopping.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/carro_batmobile_-_principal.jpg', 'https://images-americanas.b2w.io/produtos/1320858840/imagens/batman-e-batmobile-batmovel-batman-forever-hollywood-rides-1-24-jada/1320858840_1_xlarge.jpg', 'https://d2m78g3cfije3s.cloudfront.net/Custom/Content/Products/36/34/3634_carrinho-batmovel-com-lancador-de-missil-000703_m3_637498701761194952.jpg'
  ];

  const handleClick = (imageUrl: string) => {
    onImageSelect(imageUrl);
  };

  return (
    <ImageGallery>
      {imageUrls.map((url, index) => (
        <ImageItem key={index} src={url} alt={`Image ${index + 1}`} onClick={() => handleClick(url)} />
      ))}
    </ImageGallery>
  );
};

export default ImageGalleryComponent;
