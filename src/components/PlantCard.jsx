function PlantCard({ plant, addToCart, cart }) {
  const cartItem = cart.find(item => item.id === plant.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="price">${plant.price.toFixed(2)}</div>
        
        {quantityInCart > 0 && (
          <p style={{ color: '#4caf50', fontWeight: 'bold', marginBottom: '10px' }}>
            In cart: {quantityInCart}
          </p>
        )}

        <button className="add-to-cart" onClick={() => addToCart(plant)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default PlantCard;