import { useState } from "react"
import { inventoryData } from "../../data/data"
import InventoryList from "../../components/InventoryList/InventoryList"

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around'
}

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])
  return (
    <main>
      <h1>Shop</h1>
      <section style={style}>
        <InventoryList title="Shop Inventory" inventory={shopInventory} />
        <InventoryList title="User Inventory" inventory={userInventory} />
      </section>
    </main>
  );
}

export default Shop