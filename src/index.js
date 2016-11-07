import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
	res.json({
		hello: 'JS World',
	});
});

app.get('/task2A', (req, res) => {
	const a = ( +req.query.a ) ? +req.query.a : 0;
	const b = ( +req.query.b ) ? +req.query.b : 0;
	res.send(String(a + b));
});

app.listen(8080, () => {
	console.log('Your app listening on port 8080!');
});