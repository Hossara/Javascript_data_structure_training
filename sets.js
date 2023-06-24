const prices = new Set()


prices.add(1)
prices.add(2)

// not showing because it's not unique
prices.add(1)

// Loop in price set
for (const item of prices) console.log(item)

// Check if item is included
console.log(prices.has(2))
