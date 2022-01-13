# Languing

## Contents

- [Get Started](#-get-started)
  - [Used Technologies](#-Used-Technologies)
  - [Donwload From GitHub](#-download-from-bitbucket)
  - [Insall all dependencies](#-insall-all-dependencies)
  - [Install ios PODs](#-Install-ios-PODs)
  - [Run the application](#-Run-the-application)
  - [Available  Scripts](#-Available-Scripts)


## Get started:

## Used Technologies

- [TypeScript](https://reactnative.dev/docs/typescript)
- [React Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Redux](https://react-redux.js.org/)
- [React Native Firebase](https://rnfirebase.io/)


## Icon I used for generate App Icon for IOS & android  

- [App icon](https://www.shareicon.net/data/512x512/2016/07/07/116570_brand-l-letter-single_512x512.png?fbclid=IwAR2LCKoyGnR1hcchqUzwLXbrCbYda7kNzTPqYCryiqlU5Q9zsx97cOiz6R0)

### Download from GitHub

```bash
$ git clone https://github.com/AbanoubAshraaf/Languing.git
```

```bash
$ cd Languing
```

### Insall all dependencies

```bash
$ npm install
```

### Install ios PODs

```bash
$ cd ios => pod install => cd ..
```

### Run the application

```bash

# for android
$ yarn android
# or
$ npm run android

# for ios
$ yarn ios
# or
$ npm run ios

``` 

## Available  Scripts

**Example**

```bash
$ yarn ios
```

| Name           | Description                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `andorid`      | Run on andorid emulator > the andorid emulator must be pre-starte                                                                                                |
| `ios`          | Run on IOS emulator                                                                                                                                              |
| `lint`         | Run `eslint`                                                                                                                                                     |
| `lint:fix`     | Auto fix eslint`                                                                                                                                                 |


## File Structure

```ts
/**
 *   └── components
        ├── ComponentName
        │   ├── ComponentName.style.ts
        │   ├── ComponentName.tsx
        │   ├── ComponentName.interface.ts
        │   └── index.ts
 * /
```

