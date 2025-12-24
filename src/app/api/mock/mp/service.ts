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
