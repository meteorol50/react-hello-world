# 構築手順

## 新規作成

```js
$ npx create-react-app hello-world --template typescript
```

## 起動

```js
$ cd hello-world
$ yarn start
```

### importのreactがエラーになっている件

`$ yarn add -D @types/react` で型定義ファイルをインストール(-D は開発でのみ使用するため)

### 非相対インポートで新規ファイルや移動のために認識してくれない場合

以下の2点のいずれかで解決

1. shift + command + P またはF1キーでコマンドパレットを開き、`$ >type` を入力するとリストアップされる「TypeScript: Reload Project」を選択・実行
2. コンソールから以下を実行

```js
$ touch tsconfig.json
```

### App.tsx でのReactのインポート

tsconfig.json で `"jsx": "react-jsx"` の場合
→ 省略可能

## TypeScript等各種パッケージアップデート

```js
$ yarn upgrade-interactive --latest
$ yarn upgrade typescript@latest
```

## ESLintの設定ファイル作成

```js
$ yarn eslint --init
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> React
> use TypeScript:  Yes
> where run:  Browser
> Use a popular style guide
> Airbnb
> JavaScript
> install with npm:  No
// エラーで終わっても一旦大丈夫
// 最後Noとしたのでターミナルで列挙されたパッケージをインストール
$ yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
$ typesync
$ yarn
```

### airbnbのeslintを後から追加する場合、依存しているパッケージを含めてインストール

```js
$ yarn add -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks
$ typesync
$ yarn
```

## prettierインストール

```js
$ yarn add -D prettier eslint-config-prettier
$ (typesync) // 自動実行されるようにpackage.jsonで設定している場合不要
$ yarn
```

### ESLintとprettierの衝突をチェック

```js
$ npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'
```

## stylelintのインストール

```js
$ yarn add -D stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order
$ // 省略
```

### アロー関数に統一するeslintプラグイン(今回は入れず)

```js
$ yarn add -D eslint-plugin-prefer-arrow
$ // 省略
```

## Gitリポジトリへcommitした時に走るlintチェックインストール

```js
$ yarn add -D husky lint-staged
$ // 省略
```

## semantic-ui-reactのインストール

```js
$ yarn add semantic-ui-react semantic-ui-css
```

その後 src/index.tsx から semantic.min.css を読み込む

## ReactRouterのインストール

```js
$ yarn add react-router react-router-dom
$ // 省略
```

## Reduxのインストール

```js
$ yarn add redux react-redux @reduxjs/toolkit
$ // 省略
```

## React-Bootstrap インストール

$ yarn add react-bootstrap bootstrap

### /src/index.tsxでのインポート

import 'bootstrap/dist/css/bootstrap.min.css';

## Emotionのインストール

```js
$ yarn add @emotion/react
```

tsconfig.jsに"jsxImportSource": "@emotion/react"を追記

```js
$ yarn add -D @emotion/eslint-plugin
```

## Storybookのインストール

```js
$ yarn sb init
```

### .storybook/main.jsとpreview.jsの内容を書き換え

[参考](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/)

### .eslintrc.jsに以下を追加

```js
// airbnbのlintを使用している場合に必要、devDependenciesからimportをすることをrulesで許可
'import/no-extraneous-dependencies': [
  'error',
  {
    devDependencies: ['**/*.stories.js'],
    peerDependencies: false,
  },
],

// StorybookのArgsを使用するために必要
overrides: [
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
],
```

### 起動

```js
$ yarn storybook
```

## renovateの導入

renovete.json 作成

## nodeのバージョン更新

バージョンが古くてupdateできないものが出てきたのでnode更新

$ nodenv local 14.17.3
$ yarn

## 追加パッケージインストール

Book-Square/proto-app で使っているものを追加でインストール

$ yarn add @emotion/babel-preset-css-prop
$ yarn add react-hook-form
$ yarn add react-router-bootstrap
$ yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser
$ yarn add -D stylelint-config-prettier

## .gitignore更新

## 設定ファイル群作成、更新

.babelrc
.eslintrc.js
.prettierrc.js
.stylelintrc.js
