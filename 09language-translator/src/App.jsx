import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
useEffect(() => {

  const fetchData = async () => {

    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`
    )

    const data = await response.json()

    const rate = data.rates[toCurrency]

    setConvertedAmount((Number(amount) * rate).toFixed(2))
  }

  fetchData()

}, [amount, fromCurrency, toCurrency])



  return (
    <>
     {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          Currency Convertor
        </h1>
      </nav>

      <div className="container">

        {/* Input Section */}
        <div className="inputarea">

          <label>From</label>
          
          <div className="field">

            <input
             type="number"
              value={amount}
               onChange={(e) => setAmount(e.target.value)}
              />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>

          </div>
        </div>

        {/* Output Section */}
        <div className="outputare">

          <label>To</label>

          <div className="field">

            <input
              type="text"
               value={convertedAmount}
               readOnly
              />

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;