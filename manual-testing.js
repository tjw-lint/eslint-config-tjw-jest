{ it: () => {} }

test();

describe('qawer', () => {
  test('lowercase', () => {
    expect('asdf').toBe(2);
  });

  test('Should render correctly', () => {
    expect('a')
      .toMatchInlineSnapshot(`
        'a'
      `);
  });

  it('Should render', () => {
    expect('a')
      .toMatchInlineSnapshot(`
        'a'
      `);
  });
});
