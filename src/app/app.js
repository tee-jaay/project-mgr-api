import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();

app.use([
    morgan('dev'),
    cors(),
    express.json()
]);

app.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Success' });
});

app.use((_req, _res, next) => {
    const error = new Error('Resource Not Found');
    error.status = 404;
    next(error);
});

app.use((error, _req, res, _next) => {
    if (error.status) {
        return res.status(error.status).json({
            message: error.message,
        });
    }
    res.status(500).json({
        message: 'Something went wrong'
    });
});

export default app;