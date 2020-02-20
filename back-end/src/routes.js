import { Router } from 'express';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

// Routes don´t that need authentication === Put here

routes.use(authMiddlewares);

// Routes that need authentication === Put here

export default routes;
