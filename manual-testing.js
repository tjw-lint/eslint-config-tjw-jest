{ it: () => {} }

test();

describe('qawer', () => {
  test('lowercase', () => {
    expect('asdf').toBe(2);
  });

  test('Should render', () => {
    expect('a')
      .toMatchInlineSnapshot(`
        'a'
      `);
  });
});
