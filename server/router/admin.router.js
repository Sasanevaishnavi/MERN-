const express = require ("express");
const router = express.Router();
const adminControllers= require("../Controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware")


router.route("/users").get(authMiddleware,adminMiddleware,adminControllers.getAllUsers);

router.route("/users/:id").get(authMiddleware,adminMiddleware, adminControllers.getUserByID);
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,adminControllers.updateUserById);

//router.route("/user/delete/:id").delete(adminMiddleware,adminMiddleware,adminControllers.deleteUserById);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware,adminControllers.deleteUserById);
router.route("/contacts").get(authMiddleware,adminMiddleware,adminControllers.getAllContacts);
router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware,adminControllers.deleteContactById);



module.exports = router;