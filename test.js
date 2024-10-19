const assert = require('assert');
const is99 = require('./index');

// test.test.js

const testObjects = [
    { description: 'object with value 99', object: { value: 99 }, value: true },
    { description: 'object with value 100', object: { value: 100 }, value: false },
    { description: 'object with value 98', object: { value: 98 }, value: false },
    { description: 'object with value 0', object: { value: 0 }, value: false },
    { description: 'object with value -99', object: { value: -99 }, value: false },
    { description: 'object with value 99.99', object: { value: 99.99 }, value: false },
    { description: 'object with value 99.01', object: { value: 99.01 }, value: false },
    { description: 'object with value null', object: { value: null }, value: false },
    { description: 'object with undefined value', object: { value: undefined }, value: false },
    { description: 'object with no value property', object: {}, value: false },
    { description: 'complex object with nested value 99', object: { nested: { value: 99 } }, value: false },
    { description: 'object with value as string "99"', object: { value: "99" }, value: false },
    { description: 'object with value as boolean true', object: { value: true }, value: false },
    { description: 'object with value as array [99]', object: { value: [99] }, value: false },
    { description: 'object with value as function returning 99', object: { value: () => 99 }, value: false },
];

describe('is99 function tests', () => {
    testObjects.forEach(({ description, object, value }) => {
        it(`should correctly calculate the size for ${description}`, () => {
            const result = is99(object.value);
            assert.strictEqual(result, value);
        });
    });
});