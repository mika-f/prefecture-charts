# README

## Environment Variables

```ini
# globals
NEXT_PUBLIC_RESAS_API_KEY=xxx

# for testing
CHROMATIC_PROJECT_TOKEN=xxx
```

## Development

- `pnpm install`
- `pnpm run dev`

## Deployments

- `git commit -m "message"`
- `git push origin main`

## Testing

- `pnpm run lint` with Code Quality
- `pnpm run test` with Unit Testing
- `CHROMATIC_PROJECT_TOKEN=xxx pnpm run chromatic` with VRT and UI Testing
