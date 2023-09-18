import React, { useState, useEffect } from 'react';
import ExchangeRateTable from './Organism/Table';
import "./App.css"
  function App() {
    const [exchangeRates, setExchangeRates] = useState({});
    const [weBuyRates, setWeBuyRates] = useState({});
    const [weSellRates, setWeSellRates] = useState({});
    const apiKey = '112512dcc6234e0a958c35ccc5721a3f';
    const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CAD'];
    
    useEffect(() => {
      fetch(`'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=YOUR_APIKEY'`)
        .then((response) => response.json())
        .then((data) => {
          const rates = data.rates;
    
          const weBuyRatesData = {};
          const weSellRatesData = {};
    
          for (const currency of currencies) {
            const exchangeRate = parseFloat(rates[currency]); 
            if (!isNaN(exchangeRate)) { 
              const weBuyRate = exchangeRate * 1.05;
              const weSellRate = exchangeRate * 0.95;
    
              weBuyRatesData[currency] = weBuyRate;
              weSellRatesData[currency] = weSellRate;
            }
          }
    
          setExchangeRates(rates);
          setWeBuyRates(weBuyRatesData);
          setWeSellRates(weSellRatesData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [apiKey, currencies]);
  
    return (
      <div className="App">
          <h1>Exchange Rate</h1>
          <div>
          <ExchangeRateTable 
          currencies={currencies}
          weBuyRates={weBuyRates}
          exchangeRates={exchangeRates}
          weSellRates={weSellRates}
          />
          </div>
      </div>
    );
  }

  export default App;