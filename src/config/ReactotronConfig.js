import Reactotron from 'reactotron-react-js';

if(process.env.NODE_ENV !== 'production') {
  const tron = Reactotron.configure().connect();

  console.tron = tron;
}
