import { Git } from './git';

describe('Git', () => {
  it('should create an instance', () => {
    expect(new Git()).toBeTruthy();
  });
});
