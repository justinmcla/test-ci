const add = require("../index.js")

describe("test", () => {
  it("purposefully fails", () => {
    expect(add(1, 2)).toEqual(0)
  })
})