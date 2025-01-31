async function fetchPrices() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        const data = await response.json();

        const usdPrice = data.bpi.USD.rate_float;

        const prices = {
            GRYKS: usdPrice * 0.000007 // مقدار را بر اساس ضرایب مد نظر خود تنظیم کنید
        };

        updatePrices(prices);
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

function updatePrices(prices) {
    document.getElementById('priceGRYKS').innerText = `قیمت: ${prices.GRYKS.toFixed(4)} دلار`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPrices();
    setInterval(fetchPrices, 100); // هر 1 ثانیه قیمت‌ها را به‌روزرسانی می‌کند
});
