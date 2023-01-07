var amount = document.getElementsByClassName("amount")[0]

const start_date = new Date(2022,04,22)
var today = new Date()

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear())) 
}

amount.innerText = "$" + monthDiff(start_date, today) * 11.98