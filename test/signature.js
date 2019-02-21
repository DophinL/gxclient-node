import { Signature } from "../lib";
import { assert } from "chai";

describe("Signature", () => {

    it("signBuffer", () => {
        const buf = Buffer.from("hello");
        const sig = Signature.signBuffer(buf, "5KQNge45iAFohAJFnXowuPk3ob3eiGbAQMCtff7tM78i5RNywMe").toHex();
        assert.equal(sig, "1f518acd761dc47ac5075eba0ae8898129593222d42ec8432b1cba60dd3f6c9d952937b43074b6a0f746dffc6a18e43ba24d212f8c73f9f9849dc7983028452bf4");
    });
});