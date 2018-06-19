import * as board from '../board';

describe('cell should', () => {
  test('die when there are 2 neighbours', () => {
    const previousBoard = '...\n' +
                  '.*.\n' +
                  '...\n';

    const expectedBoard = '...\n' +
                          '...\n' +
                          '...\n';
    const actualBoard = board.updateState(previousBoard);

    expect(expectedBoard).toBe(actualBoard);
  });
});
