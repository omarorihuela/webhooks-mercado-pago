import express from 'express';
const api = express();

const PORT = process.env.PORT ?? 3000;

api.use(express.json());
api.use(express.urlencoded())

api.get('/', (req, res) => res.send('Response from server.'));

api.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
