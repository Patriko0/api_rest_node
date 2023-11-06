import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`\nEscutando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
