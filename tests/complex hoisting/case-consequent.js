async f => expect((await f(_ => true, async _ => 0))).toBe(1)