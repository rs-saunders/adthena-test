jest.mock('../services/dao');
jest.mock('./hello');

import dao from '../services/dao';
import hello from './hello';
import { start } from './index';

describe('sample', () => {

  it('should start', async () => {
    const message = 'Adthena';

    dao.GET = jest.fn(async (message) => {
      return { message };
    });

    hello.setHelloMessage = jest.fn((message) => { });

    await start(message);

    expect(hello.setHelloMessage).
        toBeCalledWith(`/api/status?message=${message}`);
  });
});
