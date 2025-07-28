## Getting Started

First, install the dependencies using yarn

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

The site is then presented on: [http://localhost:3000](http://localhost:3000)

To modify the dynamically loaded data through sanity go to: [http://localhost:3000/studio](http://localhost:3000/studio)

## Types from Sanity Schemas

If you update or create any sanity schemas make sure to update the types:

```bash
yarn sanity:typegen
```

> [!NOTE]
> You never need to define types for anything coming from sanity.

All types from sanity should be inferred on its own if you remember to:

- declare `groq` queries as their own variables
- use `defineQuery` instead of `groq`
- use `InferGetStaticProps` to create page props.

## Contributing`

We would love your contributions. To find out how to, read our [CONTRIBUTING.md](./CONTRIBUTING.md)
