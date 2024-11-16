export default [
  {
    "selector": "CallExpression[callee.name=\"it\"]",
    "message": "Use \"test\" instead of \"it\""
  },
  {
    "selector": "MemberExpression[object.callee.name=\"expect\"][property.name=\"toBe\"]",
    "message": "Prefer .toEqual over .toBe"
  },
  {
    "selector": "Identifier[name=\"toBe\"]",
    "message": "Prefer .toEqual over .toBe"
  }
];
