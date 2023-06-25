import express from "express";
import { detect, language, translate } from "../Controller/GTranslater.js";



var router = express.Router();

router.post('/detect',detect);
router.get('/language',language);
router.post('/translate',translate);


export default router;