import {add } from "./index";
import {assert} from "chai";

describe("math add", () => {
    it("1 + 2 = 3", () => {
        assert.equal(3, add(1, 2));
    })
})