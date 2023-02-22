const db = require("../models")

const Product = db.products
const Review = db.reviews

const addProduct = async (req, res) => {
    const info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)

    res.status(200).send(product)
}

const getAllProducts = async (req, res) => {
    const products = await Product.findAll()

    res.status(200).send(products)
}

const getOneProduct = async (req, res) => {
    const products = await Product.findAll()

    res.status(200).send(products)
}