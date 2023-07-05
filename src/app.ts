import bodyParser from 'body-parser';
import express, { Express, NextFunction, Request, Response } from 'express';
import logger from './logger';
import userRoutes from './user/user.routers';

const app: Express = express();
const port = process.env.PORT || '8080';

app.get("/", (req: Request, res: Response) => {
    res.json({ message: `Hello ${req.query.name || "World"}!`, env: process.env.NODE_ENV });
})
app.get("/wait/:seconds", (req: Request, res: Response) => {
    setTimeout(() => res.json({ message: `Hello ${req.query.name || "World"}!`, env: process.env.NODE_ENV }), +req.params.seconds)
})
app.use(bodyParser.json())
app.use("/api/v1/users", userRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error.stack)
        logger.error(error.stack)
    else
        logger.error(error.message)
    res.status(500)
    res.json({
        error: error.message
    })
})

app.listen(port, () => {
    logger.info(`Server listening on port ${port}`)
});