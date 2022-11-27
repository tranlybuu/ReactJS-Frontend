import './App.css';
import {useState, useMemo} from 'react'

// Content.js
function Content(onIncrease) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const handleSummit = () => {
    setProducts([...products, {
      nameProduct: name,
      priceProduct: parseInt(price)
    }])
    setName('')
    setPrice('')
  }
  const totalPrice = useMemo(() => {
    const result = products.reduce((result, product) => {
    return result + product.priceProduct}, 0
  )
    return result
  }, [products])
  return (
    <>
      <input
        value={name}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSummit}>Add</button>
      <br />
      <h4>Total: {totalPrice}</h4>
      <ul>
        {products.map((value, index) => (
          <li key={index}>{value.nameProduct} - {value.priceProduct}</li>
        ))}
      </ul>
      
    </>
  )
}



// App.js
function App() {

  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
