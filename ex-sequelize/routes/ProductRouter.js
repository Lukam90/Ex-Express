const ProductController = require("../controllers/ProductController")

const router = require("express").Router()

router.get("/products", ProductController.getAllProducts)
router.get("/products/published", ProductController.getPublishedProducts)
router.get("/products/:id", ProductController.getOneProduct)
router.post("/products/add", ProductController.addProduct)
router.put("/products/edit/:id", ProductController.updateProduct)
router.delete("/products/delete/:id", ProductController.deleteProduct)

module.exports = router