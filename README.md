# Nuxt Content Bun Production Single Executable Error

## Steps to reproduce

### Install dependencies

```sh
bun install
```

### Build

```sh
bun run build
```

### Compile to Single executable

```sh
bun build .output/server/index.mjs --compile --outfile cli
```

### Run executable

```sh
./cli
```

### Access page

Access the page on localhost:3000, you will get an error in the console.