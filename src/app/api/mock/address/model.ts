import z from 'zod';

export const TOOL_NAME = 'address';

export namespace AddressModel {
  // 基础地址模型
  export const address = z.object({
    addrId: z.number().optional().describe('地址ID'), // 新增时可能没有
    userId: z.number().optional().describe('用户ID'),
    city: z.string().optional().describe('城市'),
    addrName: z.string().optional().describe('地址名称'),
    address: z.string().optional().describe('详细地址'),
    houseNo: z.string().optional().describe('门牌号'),
    longitude: z.number().optional().describe('经度'),
    latitude: z.number().optional().describe('纬度'),
    name: z.string().optional().describe('联系人姓名'),
    phone: z.string().optional().describe('联系电话'),
    isDefaultAddr: z.boolean().optional().describe('是否默认地址'),
  }).describe('地址信息');

  // 通用响应结果
  export const ajaxResult = z.object({
    code: z.number().describe('状态码'),
    msg: z.string().describe('消息'),
  }).describe('统一响应结果');

  // 分页查询参数
  export const listParams = z.object({
    pageNum: z.string().optional().transform(val => val ? parseInt(val) : 1).describe('当前页'),
    pageSize: z.string().optional().transform(val => val ? parseInt(val) : 10).describe('每页大小'),
  }).describe('地址列表查询参数');

  export const listParamsSchema = z.object({
    pageNum: z.string().transform(val => parseInt(val)).default(1).describe('当前页'),
    pageSize: z.string().transform(val => parseInt(val)).default(10).describe('每页大小'),
  });

  // 删除参数
  export const removeParams = z.object({
    addrId: z.string().describe('地址ID'),
  });

  // 分页响应结果
  export const pageResultAddress = z.object({
    code: z.number().describe('状态码'),
    msg: z.string().describe('消息'),
    pageNum: z.number().describe('当前页'),
    pageSize: z.number().describe('每页大小'),
    total: z.number().describe('总记录数'),
    pages: z.number().describe('总页数'),
    list: z.array(address).describe('数据列表'),
  }).describe('分页响应结果');

  export type Address = z.infer<typeof address>;
  export type AjaxResult = z.infer<typeof ajaxResult>;
  export type ListParams = z.infer<typeof listParamsSchema>;
  export type RemoveParams = z.infer<typeof removeParams>;
  export type PageResultAddress = z.infer<typeof pageResultAddress>;
}
