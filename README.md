# What is this?

This is production made when I tried to make Isomorphic SPA application with Serverside Rendering.
これはSPA with SSR構成を試そうと素振りした時の残骸です.

This app's routing is implement by express in serverside and by react-router in browserside.
1. When express server get initial request from browser, target component will be serverside rendered, and express serve it.
2. After browser get response, ↑ html, script will be executed and component will be hydrated.
serversideのroutingはexpressで, browsersideのroutingはreact-routerでやってます.
初回reqの時だけexpress上でssrして配信 -> 配信されるとclient用のスクリプトが実行されてcomponentがhydrateされる.

## how to try it

git clone and 

```
yarn install

// build script for client and server
yarn run build

// launch express server
yarn run server
```