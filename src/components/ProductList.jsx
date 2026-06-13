import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/CartSlice';

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 25.99, image: "https://picsum.photos/id/107/300/300" },
    { id: 2, name: "Monstera Deliciosa", price: 45.99, image: "https://picsum.photos/id/201/300/300" },
    { id: 3, name: "Fiddle Leaf Fig", price: 65.99, image: "https://picsum.photos/id/251/300/300" },
    { id: 4, name: "Peace Lily", price: 22.99, image: "https://picsum.photos/id/133/300/300" },
    { id: 5, name: "Rubber Plant", price: 34.99, image: "https://picsum.photos/id/180/300/300" },
    { id: 6, name: "ZZ Plant", price: 28.99, image: "https://picsum.photos/id/366/300/300" },
  ],
  Succulent: [
    { id: 7, name: "Aloe Vera", price: 18.99, image: "https://picsum.photos/id/312/300/300" },
    { id: 8, name: "Jade Plant", price: 19.99, image: "https://picsum.photos/id/450/300/300" },
    { id: 9, name: "Echeveria", price: 14.99, image: "https://picsum.photos/id/201/300/300" },
    { id: 10, name: "Haworthia", price: 16.99, image: "https://picsum.photos/id/312/300/300" },
    { id: 11, name: "Burro's Tail", price: 21.99, image: "https://picsum.photos/id/366/300/300" },
    { id: 12, name: "Panda Plant", price: 17.99, image: "https://picsum.photos/id/107/300/300" },
  ],
  Outdoor: [
    { id: 13, name: "Lavender", price: 12.99, image: "https://picsum.photos/id/133/300/300" },
    { id: 14, name: "Rose Bush", price: 29.99, image: "https://picsum.photos/id/251/300/300" },
    { id: 15, name: "Hibiscus", price: 24.99, image: "https://picsum.photos/id/180/300/300" },
    { id: 16, name: "Hydrangea", price: 32.99, image: "https://picsum.photos/id/201/300/300" },
    { id: 17, name: "Gardenia", price: 27.99, image: "https://picsum.photos/id/312/300/300" },
    { id: 18, name: "Oleander", price: 19.99, image: "https://picsum.photos/id/450/300/300" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Houseplants</h1>

      {Object.keys(plants).map(category => (
        <div key={category} style={{ marginBottom: '60px' }}>
          <h2 style={{ marginBottom: '25px', color: '#2e7d32' }}>{category} Plants</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px' }}>
            {plants[category].map(plant => (
              <div key={plant.id} style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '15px',
                textAlign: 'center',
                background: 'white'
              }}>
                <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
                <h3 style={{ margin: '15px 0 8px' }}>{plant.name}</h3>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2e7d32' }}>${plant.price}</p>
                
                <button
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={isInCart(plant.id)}
                  style={{
                    marginTop: '12px',
                    padding: '10px 24px',
                    background: isInCart(plant.id) ? '#ccc' : '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isInCart(plant.id) ? 'not-allowed' : 'pointer',
                    width: '100%'
                  }}
                >
                  {isInCart(plant.id) ? 'Added ✓' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;