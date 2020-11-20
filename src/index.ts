// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  api.logger.info('use umi-plugin-antchain-joinus');
  api.addEntryCode(
    () =>
      `console && console.info && console.info('🚀 蚂蚁链前端开放招聘中 https://www.yuque.com/antchain-fe/blog/joinus');`,
  );
}
