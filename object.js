const product = {
    title: "Book",
    price: 90,
    info() {
        console.log(this.title, this.price)
    }
}

product.info()


for (const item in product) console.log(item)