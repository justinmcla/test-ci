const add = require("../index.js")

describe("test", () => {
  it("checking success", () => {
    expect(add(1, 2)).toEqual(3)
  })
})