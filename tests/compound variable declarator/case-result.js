async f => expect((await f(() => 1, async _ => 2))).toBe(6)