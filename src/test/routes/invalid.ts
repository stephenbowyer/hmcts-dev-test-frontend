import { app } from '../../main/app';

import { expect } from 'chai';
import request from 'supertest';

// TODO: replace this sample test with proper route tests for your application
/* eslint-disable jest/expect-expect */
describe('Invalid page', () => {
  describe('on GET', () => {
    test('should return a 404 status', async () => {
      await request(app)
        .get('/invalidpage')
        .expect(res => expect(res.status).to.equal(404));
    });
  });
});
