# leave-management-app

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
## 環境変数設定

`~/.config` ディレクトリ参照  
`dotenv` で管理( `.env.<STAGE_NAME>` )

---
## バージョン情報

- node 14.5.0
- Nuxt ^2.15.4
- Vuetify ^2.5.6

---

## 使用技術

- TypeScript  
  https://ja.nuxtjs.org/guide/typescript/
- Composition API  
  https://composition-api.vuejs.org/
- @nuxtjs/composition-api  
  https://composition-api.nuxtjs.org/#api-reference

---

## コンポーネントのディレクトリ構成

`@/components/` , `@/templates/` の２種類  
Vue.js スタイルガイドに則り、ファイル名は必ず複数単語にする。  
https://jp.vuejs.org/v2/style-guide/index

### @/components

- Atomic デザインの **Atoms** と **Molecules** に当たる。(場合によっては **Organisms** も)
- **Vuex や外部 API に依存しない** 
- 必要な値は Props で受け取る。
- ディレクトリごと他のプロジェクトにコピペしても動作するような汎用的なコンポーネントが入る。
- buttons, inputs, cards, などパーツの分類ごとにディレクトリを分ける

### @/templates

- `@/components/` ディレクトリのコンポーネント複数からなる、意味を持ったコンポーネント（レイアウト的な関心によるまとまり）
- **Vuex や外部 API に依存し得る**
- `@/layouts/` ディレクトリ配下に複数の `@/templates/` コンポーネントが配置されページを構成する

---

### SFC ファイル

- SFC ファイルの一番外側の要素には、コンポーネント名に応じた `className` , `id` をふる
  - コンポーネントには `className` , `pages/` 配下のコンポーネントには `id` をふる
- コンポーネントにはファイル名と同じ `name` をつける。ページには `Pages` を prefix としてつける

```js
// components/HogeFuga.vue
<template>
  <v-row class="hoge-fuga">
    // ...
  </v-row>
</template>
<script lang="ts">
  export default defineComponent({
    name: 'HogeFuga',

    setup() {
      // ...
    }
  })
</script>

```

```js
// pages/HogeFuga.vue
<template>
  <v-row id="hoge-fuga">
    // ...
  </v-row>
</template>
<script lang="ts">
  export default defineComponent({
    name: 'PagesHogeFuga',

    setup() {
      // ...
    }
  })
</script>

### 文言管理

文言の管理は `i18n` を使用する。  
DOC: https://i18n.nuxtjs.org/

### CI

huskyによってcommit 時に linter が、push 時に test が走る。
