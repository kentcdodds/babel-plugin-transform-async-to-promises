async f => expect((await f([async _ => true]))).toBe(true)