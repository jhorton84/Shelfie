module.exports = {
    create:(req, res) => {
        const db = req.app.get('db');
        const newProduct = req.body;
        db.create_product(newProduct).then(newerProduct => {
            res.status(200).json(newerProduct);
        })
    },

    getOne:(req, res) => {
        const db = req.app.get('db');
        const productId = req.params.id;
        db.read_product(productId).then(product => {
            res.status(200).json(product)
        })
    },

    getAll:(req, res) => {
        const db = req.app.get('db');
        db.read_products().then(product => {
            res.status(200).json(product);
        })
    },

    update:(req, res) => {
        const db = req.app.get('db');
        const productName = req.params.productName;
        const productId = req.params.id;
        const productPrice = req.params.productPrice;
        const productImage = req.params.productImage;
        db.update_product(productId, productName, productPrice, productImage).then(product => {
            res.status(200).json(product);
        })
    },

    delete:(req, res) => {
        const db = req.app.get('db');
        const productId = req.params.id;
        db.delete_product(productId).then(product => {
            res.status(200).json(product);
        })
    }
}