import main from '../src/app';

test('should return "Hello World"', () => {
  expect(main()).toBe('Hello World');
});
