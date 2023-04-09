import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
const port: number = 3000;

app.use(express.static(__dirname + '/../dist'));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/../src/index.html'));
});

app.get('/home', (req: Request, res: Response) => {
    res.send('run prop');
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});