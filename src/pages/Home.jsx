import storesData from "../data/stores.js";
import StoreCard from "../components/StoreCard";

function Home() {
  return (
    <main>
      <h1>Lojas Disponíveis</h1>
      <div className="store-list">
        {storesData.stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </main>
  );
}

export default Home;