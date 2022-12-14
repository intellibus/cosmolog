# cosmolog

![cosmolog — Logging Framework For The Open Source Universe](assets/cosmolog.png)

> **THIS PROJECT IS STILL IN THE DESIGN PHASE**
>
> IDEAS & CONTRIBUTIONS ARE WELCOME
>
> An [Open Source Universe](https://github.com/intellibus/approach) Project

---

## Contents

- [cosmolog](#cosmolog)
  - [Contents](#contents)
  - [Features ✨](#features-)
  - [Install 🛠](#install-)
  - [Usage 🔭](#usage-)
  - [Documentation 🛰](#documentation-)
  - [Contributing 🌎](#contributing-)
  - [License ⚖️](#license-️)

## Features ✨

- Log Levels `Planned`
- Custom Formatters `Planned`
- Levels Viewable by ENVIRONMENT `Planned`
- Integration w/ Solar System `Planned`
- Error Logs w/ Stack Traces `Planned`

## Install 🛠

```sh
npm install cosmolog
```

## Usage 🔭

Read more about the [Design](https://github.com/intellibus/cosmolog/blob/main/DESIGN.md) behind `cosmolog` here.

```typescript
import { log } from 'cosmolog';
log.format('json');
log.debug('A Debug Log');
// {_level: 'DEBUG', timestamp: '2022-07-29T14:45:48.952Z', message: 'A Debug Log' }
log.info('A Simple Log', { data: 'optionalDataObject' });
// {_level: 'INFO', timestamp: '2022-07-29T14:45:49.952Z', message: 'A Simple Log', meta: { data: 'optionalDataObject' } }
log.error('An Error Happened', new Error('Optional Error Argument'));
// {_level: 'ERROR', timestamp: '2022-07-29T14:45:50.952Z', message: 'An Error Happened', error: { message: 'Optional Error Argument', trace: 'Stack Trace...' } }
```

## Documentation 🛰

`cosmolog` *is under active development, documentation will be added once an initial release is ready.*

## Contributing 🌎

We would love for you to contribute your ideas, code, & fixes to `cosmolog`.

We encourage everyone to read our [Design Document](https://github.com/intellibus/cosmolog/blob/main/DESIGN.md) to learn more about the thought process behind cosmolog.

Also check out the [rewards](https://github.com/intellibus/approach/blob/main/REWARDS.md) offered for contributing to the [Open Source Universe](https://github.com/intellibus/approach).

## License ⚖️

MIT
