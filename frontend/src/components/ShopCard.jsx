function ShopCard({ shop, index, deleteShop, editShop }) {
  return (
    <div className="shop-card">
      <h3>{shop.ownerName}</h3>
      <p>Shop Type : {shop.shopType}</p>
      <p>Floor Number : {shop.floorNumber}</p>
      <p>Phone Number : {shop.phoneNumber}</p>
      <p>CCTV Status : {shop.cctvStatus}</p>
      <p>Rent Status : {shop.rentStatus}</p>
      <button
        className="btn"
        onClick={() => deleteShop(shop._id)}
      >
        Delete
      </button>
      <button
  className="btn"
  onClick={() => editShop(shop)}
>
  Edit
</button>
    </div>

  )
}
export default ShopCard