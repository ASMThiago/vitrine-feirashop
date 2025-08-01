import { useParams } from "react-router-dom";
import storesData from "../data/stores.js";
import ProductCard from "../components/ProductCard";

function Store() {
  const { storeId } = useParams();
  const store = storesData.stores.find((s) => s.id === storeId);

  if (!store) return <p>Loja não encontrada</p>;

  return (
    <main>
      <h1 style={{marginTop: "3rem"}}>{store.name}</h1>
      <div className="product-list">
        {store.products.map((product) => (
          <ProductCard key={product.id} product={product} store={store} />
        ))}
      </div>
    </main>
  );
}

export default Store;