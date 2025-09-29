import { app } from '../../main/app';

import { expect } from 'chai';
import request from 'supertest';

// TODO: replace this sample test with proper route tests for your application
/* eslint-disable jest/expect-expect */
describe('Status page', () => {
  describe('on GET', () => {
    test('should return a page', async () => {
      await request(app)
        .get('/status')
        .expect(res => expect(res.status).to.equal(200));
    });
  });
});
