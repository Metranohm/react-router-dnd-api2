const InventoryList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.inventory.map(item =>
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Cost: {item.cost}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default InventoryList;