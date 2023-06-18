export default class Util {

    generateRandomDate() {
        const start = new Date(2023, 0, 1); // January 1, 2023
        const end = new Date(); // Current date
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return randomDate.toISOString().split('T')[0]; // Format the date as 'YYYY-MM-DD'
    }

    // Helper function to generate a random order type
    generateRandomType() {
        const types = ['Dine-in', 'Takeaway', 'Delivery'];
        const randomIndex = Math.floor(Math.random() * types.length);
        return types[randomIndex];
    }

    // Helper function to generate a random payment method
    generateRandomPaymentMethod() {
        const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'PayPal'];
        const randomIndex = Math.floor(Math.random() * paymentMethods.length);
        return paymentMethods[randomIndex];
    }

    // Helper function to generate a random payment status
    generateRandomPaymentStatus() {
        const paymentStatuses = ['Paid', 'Unpaid'];
        const randomIndex = Math.floor(Math.random() * paymentStatuses.length);
        return paymentStatuses[randomIndex];
    }

    // Helper function to generate a random delivery status
    generateRandomDeliveryStatus() {
        const deliveryStatuses = ['Delivered', 'Pending', 'In Transit'];
        const randomIndex = Math.floor(Math.random() * deliveryStatuses.length);
        return deliveryStatuses[randomIndex];
    }

    // Helper function to generate a random total amount
    generateRandomAmount() {
        return parseFloat((Math.random() * 100).toFixed(2));
    }

    generateRows(numRows: number) {
        const rows = [];

        for (let i = 1; i < numRows; i++) {
            const id=i;
            const order_id = Math.floor(Math.random() * 100000) + 1;
            const date = this.generateRandomDate();
            const type = this.generateRandomType();
            const payment_method = this.generateRandomPaymentMethod();
            const payment_status = this.generateRandomPaymentStatus();
            const delivery_status = this.generateRandomDeliveryStatus();
            const total_amount = this.generateRandomAmount();

            rows.push(this.createData(id,order_id, date, type, payment_method, payment_status, delivery_status, total_amount));
        }

        return rows;
    }
    createData(
        id:number,
        order_id: number,
        date: string,
        type: string,
        payment_method: string,
        payment_status: string,
        delivery_status: string,
        total_amount: number
    ) {
        return {
            id,
            order_id,
            date,
            type,
            payment_method,
            payment_status,
            delivery_status,
            total_amount
        };
    }
}

