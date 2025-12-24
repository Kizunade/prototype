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
