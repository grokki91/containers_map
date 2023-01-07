import ErrorRepository from '../app/ErrorRepository';

describe('Check function ErrorRepository', () => {
  const error = new ErrorRepository();
  test('Check positive case', () => {
    expect(error.translate(404)).toBe('Not Found');
  });
  test('Check negative case', () => {
    expect(error.translate(100)).toBe('Unknown error');
  });
});
