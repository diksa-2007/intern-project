function ShopCard({ shop, index, deleteShop }) {
  return (
    <div className="shop-card">
      <h3>{shop.ownerName}</h3>
      <p>Shop Type : {shop.shopType}</p>
      <p>Floor Number : {shop.floorNumber}</p>
      <button
        className="btn"
        onClick={() => deleteShop(index)}
      >
        Delete
      </button>
    </div>

  )
}
export default ShopCard