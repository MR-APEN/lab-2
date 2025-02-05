import { Router } from "express"
import { getUserById, getUsers, deleteUser, updatePassword, updateUser, updateProfilePicture } from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator} from "../middlewares/user-validators.js"
import { createMulterConfig } from "../middlewares/multer-uploads.js"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

router.patch("/updateProfilePicture/:uid", updateProfilePicture)

export default router
