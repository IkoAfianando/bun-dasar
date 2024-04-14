import {describe, it, expect} from "bun:test";
import {User} from "../packages/modules/user/user";

describe('User Package', () => {
    it('should accessed from main package', async () => {
        const user = new User("Iko");
        expect(user.name).toBe("Iko")
    })
});
