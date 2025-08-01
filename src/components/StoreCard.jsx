import { Link } from "react-router-dom";

function StoreCard({ store }) {
  return (
    <div className="store-card">
      <h2>{store.name}</h2>
      <Link to={`/store/${store.id}`}>Ver Vitrine</Link>
    </div>
  );
}

export default StoreCard;