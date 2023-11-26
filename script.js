document.addEventListener('DOMContentLoaded', function() {
    fetchReceipts();
});

// function fetchReceipts() {
//     fetch('http://127.0.0.1:5000/receipts')
//         .then(response => response.json())
//         .then(data => displayReceipts(data))
//         .catch(error => console.error('Error fetching data:', error));
// }

function fetchReceipts() {
    fetch('https://rlessbackend.azurewebsites.net/receipts')
        .then(response => response.json())
        .then(data => displayReceipts(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayReceipts(receipts) {
    const container = document.getElementById('receipts-container');
    container.innerHTML = ''; // Clear existing content

    receipts.forEach(receipt => {
        const receiptDiv = document.createElement('div');
        receiptDiv.className = 'receipt';

        receiptDiv.innerHTML = `<h3>Receipt ID: ${receipt.id}</h3>`;


        receiptDiv.innerHTML += `<h3>User ID: ${receipt.user_number}</h3>`;

        receipt.items.forEach(item => {
            receiptDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        });
        receiptDiv.innerHTML += `<p><strong>Total: $${receipt.total}</strong></p>`;

        container.appendChild(receiptDiv);
    });
}
