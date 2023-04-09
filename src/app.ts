import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
const port: number = 3000;

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(express.static(path.join(__dirname + '/../public/css')));
app.use(express.static(path.join(__dirname + '/../public/html')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join('index.html'));
});

// app.get('/home', (req: Request, res: Response) => {
//     res.send('run prop');
// })

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});