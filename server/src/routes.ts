import { Router } from "express";
const router = Router()

import {EmailController} from './controllers/EmailController'

router.get('/send', EmailController.sendEmail)

export default router;