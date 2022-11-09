import { Router } from 'express';
const router = Router();
import * as Controller from "./employees.controller";

router
    .route('/')
    .get(
        Controller.getEmployes
    );

router
    .route('/:id')
    .get(
        Controller.getTeamById
    );

router
    .route('/')
    .post(
        Controller.addTeam
    );

router
    .route('/:id')
    .patch(
        Controller.updateTeamById
    );

router
    .route('/:id')
    .delete(
        Controller.deleteTeamById
    );

export default router;