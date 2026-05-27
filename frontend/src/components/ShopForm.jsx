function ShopForm({

  shopOwnerName,
  setShopOwnerName,
  shopName,
setShopName,
  shopType,
  setShopType,
  floorNumber,
  setFloorNumber,
  phoneNumber,
  setPhoneNumber,
  cctvStatus,
  setCctvStatus,
  addShop

}) {

  return (

    <div className="shop-form">

      <input
        type="text"
        placeholder="Enter Shop Owner Name"
        value={shopOwnerName}
        onChange={(e) => setShopOwnerName(e.target.value)}
      />
      <input
  type="text"
  placeholder="Enter Shop Name"
  value={shopName}
  onChange={(e) => setShopName(e.target.value)}
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

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter CCTV Status"
        value={cctvStatus}
        onChange={(e) => setCctvStatus(e.target.value)}
      />

      <button
        className="btn"
        onClick={addShop}
      >
        Add Shop
      </button>

    </div>

  )

}

export default ShopForm