import { safeHandler } from "../../common";
import { listContractsEndpoint } from "./lookup.handlers";

import { Router } from "express";

const router = Router();

router.route("/contracts/:chain").get(safeHandler(listContractsEndpoint));

export default router;
