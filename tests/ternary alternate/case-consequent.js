async f => expect((await f(_ => true, _ => 1, async _ => 0))).toBe(1)