async f => expect((await f(() => false, () => false, () => true))).toBe(true)