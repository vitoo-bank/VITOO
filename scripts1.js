async function fetchPrices() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        const data = await response.json();

        const usdPrice = data.bpi.USD.rate_float;

        const prices = {
            KHANCOIN: usdPrice * 0.0009,
        };

        updatePrices(prices);
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

function updatePrices(prices) {
    document.getElementById('priceKHANCOIN').innerText = `قیمت: ${prices.KHANCOIN.toFixed(2)} دلار`;
}
document.addEventListener('DOMContentLoaded', () => {
    fetchPrices();
    setInterval(fetchPrices, 100);
})
