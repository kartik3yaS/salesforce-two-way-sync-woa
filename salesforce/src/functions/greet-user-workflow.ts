import {
  GSCloudEvent,
  GSContext,
  PlainObject,
  GSStatus,
} from '@godspeedsystems/core';
export default function (ctx: GSContext, args: PlainObject) {
  const {
    inputs: {
      data: { body },
    },
  } = ctx;
  return new GSStatus(true, 200, undefined, 'Hello ' + body.name, undefined);
}
