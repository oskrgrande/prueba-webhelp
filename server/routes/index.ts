import { Router, Request, Response, application} from "express";
import routeTeams from '../content/teams/teams.routes'
const router = Router();
import pkg from '../../package.json';

router.get(
    "/", (req: Request, res: Response) => {
        res.send({
            name: pkg.name,
            author: pkg.author,
            description: pkg.description,
            version: pkg.version
        })
    })

router.use("/teams",
    routeTeams
);


export default router;