const router = require("express").Router()

// router.use("/auth", require('./auth.routes'))
router.use("/movies", require('./movies.routes'))

module.exports = router;
