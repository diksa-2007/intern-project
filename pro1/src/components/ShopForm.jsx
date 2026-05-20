function ShopForm({
  ownerName,
  setOwnerName,
  shopType,
  setShopType,
  floorNumber,
  setFloorNumber,
  addShop
}) {
  return (
    <div className="shop-form">
      <input
        type="text"
        placeholder="Enter Owner Name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Shop Type"
        value={shopType}
        onChange={(e) => setShopType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Floor Number"
        value={floorNumber}
        onChange={(e) => setFloorNumber(e.target.value)}
      />
      <button className="btn" onClick={addShop}>
        Register Shop
      </button>

    </div>
  )
}
export default ShopForm