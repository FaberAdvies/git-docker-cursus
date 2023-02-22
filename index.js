import express from 'express'

const app = express();
app.get('/', (reg, res) => {
	res.send('Hello World huus')
});

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Running express on port ${PORT}`);
});
