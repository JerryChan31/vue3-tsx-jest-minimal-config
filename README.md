# vue3-tsx-jest-minimal-config

Minimal config demo of Jest testing vue3 component written in tsx.  
使用 Jest 测试 TSX 编写的 Vue 3 组件的最小配置 demo。

## Config Steps

1. Install dependencies
```bash
pnpm i -D jest ts-jest @types/jest @vue/test-utils
```

2. Modify `tsconfig.json` base on default config:
```json
{
  ...,
  "compilerOptions": {
    ...,
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
  }
}
```

3. Generate `jest.config.js` and config it.
```bash
npx ts-jest config:init
```
> Notice: You can choose your preset base on your requirement. Check [ts-jest doc](https://kulshekhar.github.io/ts-jest/docs/getting-started/presets) for more information.

Config `testEnvironment` option. If you're testing web-app, set `testEnvironment` to `jsdom` and you'll get a browser-like environment. By default it's `node`.


## 配置步骤
1. 安装依赖。
```bash
pnpm i -D jest ts-jest @types/jest @vue/test-utils
```

2. 在`tsconfig.json`的默认配置上进行修改。
```json
{
  ...,
  "compilerOptions": {
    ...,
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment",
  }
}
```

3. 生成`jest.config.js`并进行修改。
```bash
npx ts-jest config:init
```
> Notice: 你可以根据你的需求选择预置的配置模版。查看 [ ts-jest 文档](https://kulshekhar.github.io/ts-jest/docs/getting-started/presets)获取更多信息。

配置你的`testEnvironment`选项。如果你在测试前端代码，设置成`jsdom`才能获得类似浏览器的环境。这个选项的默认值是`node`。