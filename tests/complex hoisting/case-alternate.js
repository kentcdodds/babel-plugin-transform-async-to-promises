async f => expect((await f(_ => false, async _ => 0))).toBe(0)