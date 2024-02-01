import { Resolver } from '@parcel/plugin';

// eslint-disable-next-line import/no-anonymous-default-export
export default new Resolver({
  async resolve({ specifier }) {
    if (options.target === 'browser') {
      console.log('target is browser!');
    }
    if (specifier === 'process') {
      return {};
    }
    if (specifier === 'buffer') {
      return {};
    }
    return null;
  },
});
