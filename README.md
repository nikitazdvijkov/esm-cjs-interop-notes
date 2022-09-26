# CommonJS & ES Modules Interop Notes

## Files & Dependencies

Library files:

- `lib.cjs`
- `lib.mjs`
- `async.cjs`

Executable files:

- `index.cjs`
- `index.mjs`
- `consume.cjs`
- `consume.mjs`

The executables `index.*js` each import from both `lib.*js` files.

```txt
           ┌───────┐
        ┌──┤lib.cjs├──┐
        │  └───────┘  │
        │             │
        │             │
        ▼             ▼
   ┌─────────┐   ┌─────────┐
   │index.cjs│   │index.mjs│
   └─────────┘   └─────────┘
        ▲             ▲
        │             │
        │             │
        │  ┌───────┐  │
        └──┤lib.mjs├──┘
           └───────┘
```

The executables `index.*js` both output the same to the console:

```txt
bar
bar
bar
```

`lib.cjs` and `lib.mjs` are the foundation. They are both imported into `async.cjs`. The executables `consume.*js` directly import only from `async.cjs`.

```txt
    ┌───────┐     ┌───────┐
    │lib.cjs│     │lib.mjs│
    └───┬───┘     └───┬───┘
        │             │
        │             │
        └───┐     ┌───┘
            │     │
            ▼     ▼
          ┌─────────┐
          │async.cjs│
          └─┬─────┬─┘
            │     │
      ┌─────┘     └─────┐
      │                 │
      │                 │
      ▼                 ▼
┌───────────┐     ┌───────────┐
│consume.cjs│     │consume.mjs│
└───────────┘     └───────────┘
```

The executables `consume.*js` both output the same to the console:

```txt
{
  baz: 'bazooka',
  fooFunction: [AsyncFunction (anonymous)],
  fooPromise: Promise { <pending> }
}
bazooka
bar
bar
```

## Takeaways

- Importing CommonJS into ES Module is simpler than the other way around
- No top-level await in CommonJS
- Workarounds for exporting results of async computations from CommonJS:
  - Export the promise, then await it after import to consume
  - Export async function that will return desired value

## Further Reading

- [Publish ESM and CJS in a single package](https://antfu.me/posts/publish-esm-and-cjs)
