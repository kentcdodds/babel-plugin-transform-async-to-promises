async f => expect((await f(_ => 5, async _ => 2))).toBe(7)