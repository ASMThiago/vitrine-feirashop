import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildWhatsAppData } from "../utils/buildWhatsAppLink";
import { formatPrice } from "../utils/formatPrice";
import QuantitySelector from "./QuantitySelector";
import { FiArrowLeft } from "react-icons/fi";

function ProductCard({ product, store }) {
  const [quantity, setQuantity] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);
  const { url, message, phone } = buildWhatsAppData(store, product, quantity);
  const navigate = useNavigate();

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    } catch (err) {
      console.error("Falha ao copiar mensagem:", err);
    }
  };

  return (
    <div className="product-card">
      <button 
        onClick={() => navigate('/')} 
        className="back-button"
      >
        <FiArrowLeft size={20} />
      </button>

      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>
        {product.promoPrice ? (
          <>
            <span className="old-price">{formatPrice(product.price)}</span>
            <span className="promo-price">{formatPrice(product.promoPrice)}</span>
          </>
        ) : (
          <span>{formatPrice(product.price)}</span>
        )}
      </p>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <div className="whatsapp-container">
        <button onClick={handleWhatsAppClick} className="whatsapp-button">
          Comprar via WhatsApp
        </button>
      </div>

      <div className="whatsapp-fallback">
        <p>Problemas ao enviar?</p>
        <div className="copy-message-container">
          <button
            onClick={handleCopyMessage}
            className="copy-button"
          >
            Copiar mensagem
          </button>
          {showTooltip && (
            <div className="tooltip">
              Mensagem copiada!
              <span className="tooltip-arrow"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;