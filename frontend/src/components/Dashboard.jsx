import ShopForm from "./ShopForm"
import ShopCard from "./ShopCard"
import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {

  const [ownerName, setOwnerName] = useState("")
  const [shopType, setShopType] = useState("")
  const [floorNumber, setFloorNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [cctvStatus, setCctvStatus] = useState("")
  const [shops, setShops] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchShops()
  }, [])

  const fetchShops = async () => {

    try {

      const res = await axios.get(
        "http://localhost:3000/api/shops"
      )

      setShops(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  const addShop = async () => {

    if (
      ownerName === "" ||
      shopType === "" ||
      floorNumber === "" ||
      phoneNumber === "" ||
      cctvStatus === ""
    ) {

      alert("Please fill all fields")
      return

    }

    try {

      const newShop = {
        ownerName,
        shopName: ownerName,
        shopType,
        floorNumber,
        phoneNumber,
        cctvStatus,
        rentStatus: "Paid",
        buildingSystem: "Active"
      }

      if (editId) {

        await axios.put(
          `http://localhost:3000/api/shops/${editId}`,
          newShop
        )

        setEditId(null)

      } else {

        await axios.post(
          "http://localhost:3000/api/shops",
          newShop
        )

      }

      fetchShops()

      setOwnerName("")
      setShopType("")
      setFloorNumber("")
      setPhoneNumber("")
      setCctvStatus("")

    } catch (error) {

      console.log(error)

    }

  }

  const deleteShop = async (id) => {

    try {

      await axios.delete(
        `http://localhost:3000/api/shops/${id}`
      )

      fetchShops()

    } catch (error) {

      console.log(error)

    }

  }

  const editShop = (shop) => {

    setOwnerName(shop.ownerName)
    setShopType(shop.shopType)
    setFloorNumber(shop.floorNumber)
    setPhoneNumber(shop.phoneNumber)
    setCctvStatus(shop.cctvStatus)

    setEditId(shop._id)

  }

  const handleLogout = () => {

    localStorage.removeItem("token")

    window.location.href = "/"

  }

  const totalShops = shops.length

  const paidShops = shops.filter(
    (shop) => shop.rentStatus === "Paid"
  ).length

  const unpaidShops = shops.filter(
    (shop) => shop.rentStatus !== "Paid"
  ).length

  return (

    <div className="dashboard-page">

      <h1>
        Owner Dashboard
      </h1>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div className="dashboard-grid">

        <div className="dashboard-box">
          <h2>Total Shops</h2>
          <p>{totalShops}</p>
        </div>

        <div className="dashboard-box">
          <h2>Paid Shops</h2>
          <p>{paidShops}</p>
        </div>

        <div className="dashboard-box">
          <h2>Unpaid Shops</h2>
          <p>{unpaidShops}</p>
        </div>

        <div className="dashboard-box">
          <h2>CCTV Status</h2>
          <p>Active Monitoring</p>
        </div>

        <div className="dashboard-box">
          <h2>Notifications</h2>
          <p>Rent Due Alerts Enabled</p>
        </div>

      </div>

      <h1>
        <br/>
        <br/>
        Shop Registration 
      </h1>

      <ShopForm
        ownerName={ownerName}
        setOwnerName={setOwnerName}
        shopType={shopType}
        setShopType={setShopType}
        floorNumber={floorNumber}
        setFloorNumber={setFloorNumber}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        cctvStatus={cctvStatus}
        setCctvStatus={setCctvStatus}
        addShop={addShop}
      />
      <br/><br/><br/><br/><br/>
    <h2 className="section-title">Shop Control Centre</h2>
      <div className="shop-list">

        {
          shops.map((shop, index) => (

            <ShopCard
              key={shop._id}
              shop={shop}
              index={index}
              deleteShop={deleteShop}
              editShop={editShop}
            />

          ))
        }

      </div>

    </div>

  )

}

export default Dashboard