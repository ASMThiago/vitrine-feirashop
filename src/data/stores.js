import vestidoFlorido from '../assets/vestido-florido.jpg';
import bolsaPalha from '../assets/bolsa-de-palha.jpg';
import sandaliaCouro from '../assets/sandalia-de-couro.jpg';
import jaquetaJeans from '../assets/jaqueta-jeans.jpg';
import calcaCargo from '../assets/calca-cargo.jpg';
import moletomCinza from '../assets/moleton-capuz-cinza.jpg';

export default {
  stores: [
    {
      id: "ateliê-da-serra",
      name: "Ateliê da Serra",
      whatsapp: "5531998765432",
      products: [
        {
          id: "vestido-florido",
          name: "Vestido Florido Midi",
          price: 289.9,
          image: vestidoFlorido
        },
        {
          id: "bolsa-palha",
          name: "Bolsa de Palha Artesanal",
          price: 159.9,
          image: bolsaPalha
        },
        {
          id: "sandalia-couro",
          name: "Sandália de Couro Caramelo",
          price: 229.9,
          promoPrice: 179.9,
          image: sandaliaCouro
        }
      ]
    },
    {
      id: "mundo-jeans",
      name: "Mundo Jeans",
      whatsapp: "5531991234567",
      products: [
        {
          id: "jaqueta-jeans",
          name: "Jaqueta Jeans Oversized",
          price: 199.9,
          image: jaquetaJeans
        },
        {
          id: "calca-cargo",
          name: "Calça Cargo Feminina",
          price: 169.9,
          image: calcaCargo
        },
        {
          id: "moletom-capuz",
          name: "Moletom com Capuz Cinza",
          price: 139.9,
          promoPrice: 99.9,
          image: moletomCinza
        }
      ]
    }
  ]
};