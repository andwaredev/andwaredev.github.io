import { LinkData } from '../constants';
import { createLinkKey, isLinkDataGatsbyLinkDef } from './utils';

describe('createLinkKey', () => {
  it('link with to', () => {
    const link: LinkData = {
      label: 'foo',
      to: '/foo',
    };
    expect(createLinkKey(link)).toEqual('foo:/foo');
  });

  it('link with href', () => {
    const link: LinkData = {
      label: 'foo',
      href: '/foo',
    };
    expect(createLinkKey(link)).toEqual('foo:/foo');
  });
});

describe('isLinkDataGatsbyLinkDef', () => {
  it('returns true if to property defined', () => {
    const link: LinkData = {
      label: 'foo',
      to: '/foo',
    };
    expect(isLinkDataGatsbyLinkDef(link)).toEqual(true);
  });

  it('returns false if href property defined', () => {
    const link: LinkData = {
      label: 'foo',
      href: '/foo',
    };
    expect(isLinkDataGatsbyLinkDef(link)).toEqual(false);
  });
});
