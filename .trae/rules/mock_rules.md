---
alwaysApply: false
description: 编写 mock 接口时生效
---
# Mock Interface Generation Rules

当用户提供 OpenAPI JSON 定义并请求生成 Mock 接口时，请遵循以下规范和模式。

## 1. 目录结构

在 `src/app/api/mock/` 目录下创建对应模块的文件夹。每个模块包含以下文件：

- `model.ts`: 定义 Zod Schema 和 TypeScript 类型。
- `service.ts`: 实现 Mock 业务逻辑。
- `[[...slugs]]/route.ts`: 定义 Elysia 路由和 OpenAPI 文档配置。

## 2. 代码规范

### 2.1 Model (`model.ts`)
- 使用 `zod` 定义请求参数 (`Params`) 和响应数据 (`Response`)。
- 使用 `export namespace [ModuleName]Model` 组织导出的 Schema 和 Type。
- 为每个字段添加 `.describe()` 以生成详细文档。
- 导出 TypeScript 类型：`export type [Name] = z.infer<typeof [schema]>;`。
- 定义并导出常量 `TOOL_NAME`。

### 2.2 Service (`service.ts`)
- 定义抽象类 `export abstract class [ModuleName]Service`。
- 使用静态方法实现业务逻辑。
- 接收参数并返回 Promise 包裹的响应数据。
- 可以包含简单的逻辑分支（如根据特定输入返回错误）。

### 2.3 Route (`route.ts`)
- 使用 `Elysia` 框架。
- 引入 `openapi` 和 `serverTiming` 插件。
- 使用 `getPrefix` 工具函数设置路由前缀。
- 在 `openapi` 配置中包含 `documentation` 字段（info, servers 等），确保文档信息完整。
- 路由处理函数中调用 Service 方法。
- 显式定义 `query` (GET) 或 `body` (POST) 以及 `response` 的 Schema。
- 在 `detail` 中配置 `summary`, `tags`, `operationId`。

## 3. Showcase 示例

以下是 **小程序登录 (mp)** 模块的实现示例。

### model.ts
```typescript
import z from 'zod';

export const TOOL_NAME = 'mp';

export namespace MpModel {
  export const loginParams = z.object({
    code: z.string().describe('小程序用户code'),
  }).describe('小程序登录参数');

  export const loginResponse = z.object({
    code: z.number().describe('状态码'),
    msg: z.string().describe('提示信息'),
    token: z.string().describe('登录凭证'),
  }).describe('小程序登录响应');

  export type LoginParams = z.infer<typeof loginParams>;
  export type LoginResponse = z.infer<typeof loginResponse>;
}
```

### service.ts
```typescript
import type { MpModel } from './model';

export abstract class MpService {
  static async login(args: MpModel.LoginParams): Promise<MpModel.LoginResponse> {
    // 模拟登录逻辑
    if (args.code === 'fail') {
      return {
        code: 500,
        msg: '登录失败',
        token: '',
      };
    }
    return {
      code: 200,
      msg: '登录成功',
      token: 'asdfw123kj',
    };
  }
}
```

### route.ts
```typescript
import { Elysia } from 'elysia';
import { openapi } from '@elysiajs/openapi';
import { serverTiming } from '@elysiajs/server-timing';
import { getPrefix } from '@/app/tools/utils/getPrefix';
import { MpModel, TOOL_NAME } from '../model';
import { MpService } from '../service';
import z from 'zod';

const app = new Elysia({ prefix: getPrefix(TOOL_NAME) })
  .use(
    openapi()
  )
  .use(serverTiming())
  .post(
    '/login',
    ({ query }) => {
      return MpService.login(query as MpModel.LoginParams);
    },
    {
      query: MpModel.loginParams,
      response: MpModel.loginResponse,
      detail: {
        summary: '微信小程序登录',
        tags: ['用户登录'],
        operationId: 'login'
      }
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;
```
