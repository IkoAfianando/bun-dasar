import {describe, it, expect} from 'bun:test'
import {sayHello} from "../src/hello.ts";

describe('Bun Test Runner', () => {
    it('Bun Test Runner', () => {
        const response = sayHello('Iko');
        expect(response).toBe("Hello Iko")
    })
});

