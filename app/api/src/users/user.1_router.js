import { Router } from "express";

export class UserRouter {
    constructor(userController) {
        this.userController = userController;
        return this.router();
    }
    router() {
        const router = Router();

        router.get("/", this.userController.getAllUsersController);
        router.get("/:id", this.userController.getUserByIdController);
        router.post("/", this.userController.createUserController);
        router.put("/:id", this.userController.updateUserController);
        router.delete("/:id", this.userController.deleteUserController);

        router.post("/update/email/:token", this.userController.updateEmailController);
        router.post("/update/password/:token", this.userController.updatePasswordController);
        router.post("/update/username/:token", this.userController.updateUsernameController);
        return router;
    }
}
