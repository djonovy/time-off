# HR Portal

> Human resource portal

## Firebase configuration
Add file src/firebase-config.js
Example of content:
``` bash
export const config = {
  apiKey: 'actual_apiKey',
  authDomain: 'actual_authDomain',
  databaseURL: 'actual_databaseURL',
  projectId: 'actual_projectId',
  storageBucket: 'actual_storageBucket',
  messagingSenderId: 'actual_messagingSenderId'
};
```
Remove row 'src/firebase-config.js' from .gitignore file

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3210
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
