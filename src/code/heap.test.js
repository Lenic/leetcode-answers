import Heap from './heap';

describe('heap initialize', () => {
  test('build heap is right.', () => {
    const list = [1, 2, 3, 0];
    new Heap(list, list.length, (x, y) => x - y);

    const expected = [0, 1, 3, 2];
    expect(list.every((v, i) => v === expected[i])).toBeTruthy();
  });

  test('build partial heap is right.', () => {
    const list = [1, 2, 3, 0];
    new Heap(list, 3, (x, y) => x - y);

    const expected = [1, 2, 3, 0];
    expect(list.every((v, i) => v === expected[i])).toBeTruthy();
  });
});

describe('test heap public methods', () => {
  describe('test down method', () => {
    test('down is right', () => {
      const list = [0, 1, 2, 3];
      const { down } = new Heap(list, list.length, (x, y) => x - y);

      list[0] = 4;
      down(0);

      const expected = [1, 3, 2, 4];
      expect(list.every((v, i) => v === expected[i])).toBeTruthy();
    });

    test('down is right 2', () => {
      const list = [0, 1, 3, 6, 9, 12];
      const { down } = new Heap(list, list.length, (x, y) => x - y);

      list[0] = 4;
      down(0);

      const expected = [1, 4, 3, 6, 9, 12];
      expect(list.every((v, i) => v === expected[i])).toBeTruthy();
    });
  });

  describe('test up method', () => {
    test('up is right', () => {
      const list = [1, 2, 3, 4];
      const { setSize, up } = new Heap(list, list.length, (x, y) => x - y);

      list.push(0);
      setSize(list.length);
      up(list.length - 1);

      const expected = [0, 1, 3, 4, 2];
      expect(list.every((v, i) => v === expected[i])).toBeTruthy();
    });

    test('up is right 2', () => {
      const list = [1, 3, 4, 6];
      const { setSize, up } = new Heap(list, list.length, (x, y) => x - y);

      list.push(5);
      setSize(list.length);
      up(list.length - 1);

      const expected = [1, 3, 4, 6, 5];
      expect(list.every((v, i) => v === expected[i])).toBeTruthy();
    });
  });
});
