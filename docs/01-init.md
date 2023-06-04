# git
## git clone
```
git clone git@github.com-pincoin:pincoin/pincoin-react.git
```

node용 `.gitignore` 추가

# 프로젝트 준비
## `package.json` 생성
```
cd pincoin-react && npm init -y
```

# 타입스크립트 및 리액트
## 타입스크립트 설치
타입스크립트 패키지를 `devDependencies` 항목으로 추가한다.
```bash
npm install --save-dev typescript
```

npm 패키지 설치 옵션
* `--save-prod`, `-P`: dependencies 항목으로 패키지를 추가한다. `--save-dev`, `--save-optional` 옵션을 주지 않으면 기본 옵션
* `--save-dev`, `-D`: devDependencies 항목으로 패키지를 추가한다. 
* `--save-optional`, `-O`: optionalDependencies 항목으로 패키지를 추가한다.

## 타입스크립트 컴파일러 옵션 설정
`npx tsc --init`으로 `tsconfig.json` 컴파일 옵션 파일 생성하거나 아래와 같이
직접 만든다.

`tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es2016",
    // es3, es5, es2015, es2016, es2017, es2018, esnext
    "module": "commonjs",
    // commonjs, amd, es2015, esnext
    "moduleResolution": "node",
    // node, classic
    "esModuleInterop": true,
    "jsx": "preserve",
    // preserve, react-native, react, react-jsx, react-jsxdev
    "strict": true,
    // noImplicitAny, noImplicitThis, alwaysStrict,
    // strictBindCallApply, strictNullChecks,
    // strictFunctionTypes, strictPropertyInitialization
    "allowJs": false,
    "checkJs": false,
    // 일반 js 파일은 타입스크립트 컴파일하지 않음
    "removeComments": true,
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

## 타입스크립트 지원 리액트 설치
```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom
```

# 웹팩
## 웹팩 번들러
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

* webpack : 웹팩 코어
* webpack-cli : 터미널에서 웹팩 커맨드를 실행할 수 있도록 하는 도구
* webpack-dev-server : 디스크에 저장되지 않는 메모리 컴파일을 사용하는 개발 서버

## 웹팩 로더
```bash
npm install --save-dev file-loader css-loader postcss postcss-loader ts-loader
```
* file 이미지 로더
* css 로더 (단, `style-loader` 미사용)
* postcss 로더
* typescript 로더

## 웹팩 플러그인
```bash
npm install --save-dev html-webpack-plugin mini-css-extract-plugin
```
* html-webpack-plugin: 템플릿에서 index.html 파일에 자동 주입
* mini-css-extract-plugin: CSS 파일을 별도 파일로 추출, 추출하지 않으면 index.html에 그대로 남는다.
  (style-loader와 MiniCssExtractPlugin.loader는 같이 사용할 수 없음)

## `webpack.config.js` 파일 설정

```js
const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: prod ? "production" : "development",
    devtool: prod ? undefined : "source-map",

    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist/",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: ["file-loader"],
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".ts", ".tsx", ".js", ".json"],
                },
                use: ["ts-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
        open: true,
    },
};
```

# 주요 라이브러리
## tailwind
```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

아래 명령어로 `tailwind.config.js`, `postcss.config.js` 파일을 생성한다.
```
npx tailwindcss init -p
```
타입스크립트 지원을 위해 `tailwind.config.js` 파일을 아래와 같이 수정한다.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

# 소스파일 구성
## `public/index.html` 템플릿 파일
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <title>리액트 타입스크립트 예제</title>
<body>
<noscript>애플리케이션 실행을 위해 반드시 자바스크립트를 허용해야 합니다.</noscript>
<div id="root"></div>
</body>
</html>
```

##  `src/index.tsx` 파일
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const render = () => root.render(App())

render();
```

## `src/App.tsx` 파일
```tsx
import React from 'react'

const App = () => {
    return <h1 className="text-9xl underline">리액트 타입스크립트</h1>
}

export default App
```

## `src/assets/tailwind.css` 파일
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 실행 및 빌드, 배포
## `package.json`에 스크립트 명령 추가
```
{
  // ... 생략
  "scripts": {
    "start": "npm run dev -- --open",
    "dev": "NODE_ENV=development webpack serve",
    "build": "NODE_ENV=production webpack"
  }
  // ... 생략
}
```

웹서버가 실제 사용하는 정적 html 문서가 아닌 컴파일을 위한 템플릿 파일

## 개발환경 서버 실행
```bash
npm start
```

## 운영환경 빌드
```bash
npm run build
```

## `dist` 디렉토리 확인 후 서버 실행

```bash
npx serve dist
```

# 기타 라이브러리 설치
## 타입스크립트 지원 라이브러리 설치
```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom

npm install redux react-redux @reduxjs/toolkit

npm install redux-persist

npm install axios

npm install react-hook-form yup
```

최신 버전은 타입스크립트를 이미 지원하므로 다음 패키지는 굳이 설치할 필요가 없다.
* `@types/react-redux`
* `@types/redux-persist`

# `webpack.config.css` 개발/운영환경 설정 분리
## `webpack.config.css` 파일 분리
`webconfig.common.js` 파일

```js
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
}
```

`webpack.dev.js` 파일
```js
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
})
```

`webpack.prod.js` 파일
```js
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
})
```

## `package.json` 파일 스크립트 명령 수정
```
{
  // ... 생략
  "scripts": {
    "start": "npm run dev -- --open",
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack webpack.dev.js"
  },
  // ... 생략
}
```

# ESLint, Prettier 설정
## ESLint
```shell
npm install --save-dev eslint 
npm init @eslint/config
```

`.eslintrc.js`

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {},
};
```

## Prettier
```shell
npm install --save-dev --save-exac prettier
```
* `--save-exac`: 패키지를 정확한 버전으로 설치한다.

`.prettierrc.json`
```json
{
  "tabWidth": 2,
  "semi": false,
  "trailingComma": "all"
}
```

# npm 주요 명령어
```bash
npm audit
```

```bash
npm cache verify
```