import app from "./app.js";

const port = process.env.PORT ?? 3333;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application started in port ${port}`);
});
