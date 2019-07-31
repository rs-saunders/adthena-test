import '../../styles/styles.css';
import dao from '../services/dao';
import hello from './hello';

/**
 * Start sample application. This is only a sample to demonstrate an api call
 * Feel free to remove this and implement however you wish. Include an npm packages you see fit.
 * @param message
 * @returns {Promise<void>}
 */
const start = async (message = 'Adthena') => {
  const json = await dao.GET(`/api/status?message=${message}`);
  hello.setHelloMessage(json.message);
};

export {
  start,
};

