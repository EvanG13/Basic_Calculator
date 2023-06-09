import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
const port: number = 3000;

// serve static files in dist directory
app.use(express.static(path.join(__dirname + '/../dist')));
// serve static files in public directory
app.use(express.static(path.join(__dirname + '/../public/css')));
app.use(express.static(path.join(__dirname + '/../public/html')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join('index.html'));
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});