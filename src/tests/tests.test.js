// const getSum = require('./algs')
import { getSum, maxChar } from './algs'

test('anagrams function exists', () => {
    expect(typeof getSum).toEqual('function');
  });

  test("Return correct data", () => {
      expect(getSum(11, "12")).toEqual("23")
  } )

// it("dhhdhdh", () => {
//   expect(true). toBe(true)
// })

test("if return correct data", () => {
    expect(maxChar('11112')).toEqual('1')
})