async f => expect((await f([{ value: 1 }, { value: 2 }]))).toBe(3)