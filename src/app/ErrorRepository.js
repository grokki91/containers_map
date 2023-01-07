export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[403, 'Forbidden'], [404, 'Not Found'], [423, 'Locked'], [500, 'Internal Server Error']]);
  }

  translate(code) {
    let result;
    this.errors.forEach((value, key) => {
      if (key === code) {
        result = value;
      }
    });
    return result || 'Unknown error';
  }
}
