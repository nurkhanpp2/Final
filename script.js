document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function openPurchaseModal() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.width = '400px';
    modal.style.padding = '30px';
    modal.style.background = '#f9f9f9';
    modal.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '1000';
    modal.style.fontFamily = 'Arial, sans-serif';

    modal.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px;">Purchase Product</h2>
        <form>
            <label for="name" style="display: block; margin-bottom: 5px;">Your Name:</label>
            <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

            <label for="phone" style="display: block; margin-bottom: 5px;">Your Phone:</label>
            <input type="tel" id="phone" name="phone" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

            <label for="email" style="display: block; margin-bottom: 5px;">Your Email:</label>
            <input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

            <label for="address" style="display: block; margin-bottom: 5px;">Your Address:</label>
            <input type="text" id="address" name="address" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px;">

            <label for="quantity" style="display: block; margin-bottom: 5px;">Quantity:</label>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                <button type="button" id="decreaseQuantity" style="padding: 5px 10px; border: none; background: #f44336; color: white; border-radius: 5px; cursor: pointer;">-</button>
                <input type="number" id="quantity" name="quantity" value="1" min="1" style="width: 60px; text-align: center; border: 1px solid #ccc; border-radius: 5px;">
                <button type="button" id="increaseQuantity" style="padding: 5px 10px; border: none; background: #4CAF50; color: white; border-radius: 5px; cursor: pointer;">+</button>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                <button type="submit" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Confirm</button>
                <button type="button" id="closeModal" style="padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">Cancel</button>
            </div>
        </form>
    `;

    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    const quantityInput = document.getElementById('quantity');
    document.getElementById('increaseQuantity').addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    document.getElementById('decreaseQuantity').addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    modal.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert(`Thank you for your purchase! Quantity: ${quantityInput.value}`);
        document.body.removeChild(modal);
    });
}
