async f => expect((await f(async _ => "success", _ => undefined))).toBe("success")