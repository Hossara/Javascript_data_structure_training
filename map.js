const map = new Map()

map.set("title", "Book")
map.set("price", 89)

const user = { first: "Hossein", last: "Araghi" }

map.set(user, true)

for (const item of map) console.log(item)

console.log("=======================")

console.log(map.get("title"))