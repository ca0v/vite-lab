export const foo = {
  bar: 0,
};

export const ready = new Promise<typeof foo>((good, bad) => {
  try {
    foo.bar = 1;
    setTimeout(() => {
      try {
        foo.bar++;
        good(foo);
      } catch (ex) {
        bad(ex);
      }
    }, 1);
  } catch (ex) {
    bad(ex);
  }
});

const result = await ready;
export default result;
