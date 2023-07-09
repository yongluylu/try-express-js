import express from 'express';

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send({ user1: 'Lucy', user2: 'Nick', user3: 'Monica' });
});

export default router;
