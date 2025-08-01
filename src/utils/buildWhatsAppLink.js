import { formatPrice } from "./formatPrice";

export const buildWhatsAppData = (store, product, quantity = 1) => {
  const price = product.promoPrice || product.price;
  const message = `Olá, ${store.name}!\n\nVi seu produto no site da Vitrine Feirashop e tenho interesse.\n\nProduto: ${product.name}\nQuantidade: ${quantity}\nPreço: ${formatPrice(price)}\n\nAguardo seu contato para combinar o pagamento e a entrega. Obrigado(a)!`;

  const cleanedNumber = store.whatsapp.replace(/\D/g, '');
  const formattedNumber = cleanedNumber.startsWith('55') ? cleanedNumber : `55${cleanedNumber}`;
  
  return {
    url: `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}&app_absent=1`,
    message,
    phone: formattedNumber
  };
};