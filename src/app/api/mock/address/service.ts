import type { AddressModel } from './model';

// 模拟数据库
let mockAddressList: AddressModel.Address[] = [
  {
    addrId: 1,
    userId: 101,
    city: '北京市',
    addrName: '朝阳公园',
    address: '朝阳区朝阳公园南路1号',
    houseNo: '10-1',
    longitude: 116.48,
    latitude: 39.93,
    name: '张三',
    phone: '13800138000',
    isDefaultAddr: true,
  },
  {
    addrId: 2,
    userId: 101,
    city: '上海市',
    addrName: '人民广场',
    address: '黄浦区人民大道201号',
    houseNo: '5-201',
    longitude: 121.47,
    latitude: 31.23,
    name: '李四',
    phone: '13900139000',
    isDefaultAddr: false,
  },
];

export abstract class AddressService {
  static async add(data: AddressModel.Address): Promise<AddressModel.AjaxResult> {
    const newId = Math.max(...mockAddressList.map(a => a.addrId || 0), 0) + 1;
    const newAddress = { ...data, addrId: newId };
    
    // 如果设置为默认地址，取消其他默认地址
    if (newAddress.isDefaultAddr) {
      mockAddressList.forEach(a => a.isDefaultAddr = false);
    }
    
    mockAddressList.push(newAddress);
    
    return {
      code: 200,
      msg: '操作成功',
    };
  }

  static async update(data: AddressModel.Address): Promise<AddressModel.AjaxResult> {
    const index = mockAddressList.findIndex(a => a.addrId === data.addrId);
    if (index === -1) {
      return {
        code: 500,
        msg: '地址不存在',
      };
    }

    // 如果设置为默认地址，取消其他默认地址
    if (data.isDefaultAddr) {
      mockAddressList.forEach(a => a.isDefaultAddr = false);
    }

    mockAddressList[index] = { ...mockAddressList[index], ...data };

    return {
      code: 200,
      msg: '操作成功',
    };
  }

  static async remove(addrId: string): Promise<AddressModel.AjaxResult> {
    const initialLength = mockAddressList.length;
    mockAddressList = mockAddressList.filter(a => a.addrId !== Number(addrId));
    
    if (mockAddressList.length === initialLength) {
      return {
        code: 500,
        msg: '地址不存在或删除失败',
      };
    }

    return {
      code: 200,
      msg: '操作成功',
    };
  }

  static async list(params: AddressModel.ListParams): Promise<AddressModel.PageResultAddress> {
    const { pageNum, pageSize } = params;
    const total = mockAddressList.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (pageNum - 1) * pageSize;
    const end = start + pageSize;
    const list = mockAddressList.slice(start, end);

    return {
      code: 200,
      msg: '操作成功',
      pageNum,
      pageSize,
      total,
      pages: totalPages,
      list,
    };
  }
}
