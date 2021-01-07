import 'dotenv/config';
import app from './app/app';

app.listen(process.env.PORT, process.env.HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running in the port: http://localhost:${process.env.PORT}`);
});
