const currencyFormatter = (code, amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: code
    });

    return formatter.format(amount);
}

module.exports = currencyFormatter ;