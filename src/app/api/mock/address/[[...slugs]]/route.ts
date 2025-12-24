import { Elysia } from 'elysia';
import { openapi } from '@elysiajs/openapi';
import { serverTiming } from '@elysiajs/server-timing';
import { getPrefix } from '@/app/tools/utils/getPrefix';
import { AddressModel, TOOL_NAME } from '../model';
import { AddressService } from '../service';

const app = new Elysia({ prefix: getPrefix(TOOL_NAME) })
  .use(
    openapi()
  )
  .use(serverTiming())
  .post(
    '/',
    ({ body }) => {
      return AddressService.add(body);
    },
    {
      body: AddressModel.address,
      response: AddressModel.ajaxResult,
      detail: {
        summary: '新增地址',
        tags: ['用户地址'],
        operationId: 'add',
      }
    }
  )
  .put(
    '/',
    ({ body }) => {
      return AddressService.update(body);
    },
    {
      body: AddressModel.address,
      response: AddressModel.ajaxResult,
      detail: {
        summary: '修改接口',
        tags: ['用户地址'],
        operationId: 'update',
      }
    }
  )
  .delete(
    '/:addrId',
    ({ params }) => {
      return AddressService.remove(params.addrId);
    },
    {
      params: AddressModel.removeParams,
      response: AddressModel.ajaxResult,
      detail: {
        summary: '删除接口',
        tags: ['用户地址'],
        operationId: 'remove',
      }
    }
  )
  .get(
    '/list',
    ({ query }) => {
      // 这里的 query 已经是经过 zod coerce 处理过的对象了
      return AddressService.list(query as AddressModel.ListParams);
    },
    {
      query: AddressModel.listParamsSchema,
      response: AddressModel.pageResultAddress,
      detail: {
        summary: '查询接口',
        tags: ['用户地址'],
        operationId: 'list',
      }
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;
export const PUT = app.fetch;
export const DELETE = app.fetch;
