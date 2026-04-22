import { traverse } from '@cosmology/proto-parser'
import { getNestedProto } from '@ahm23/telescope-utils';
import { defaultTelescopeOptions, ProtoService } from '@ahm23/telescope-types';
import { expectCode, getTestProtoStore } from '../../../test-utils';
import { GenericParseContext } from '../../encoding';
import * as t from '@babel/types';
import { buildRpcStores } from './mobx';

const store = getTestProtoStore();
store.traverseAll();

it('builds stores.', async () => {
  const ref = store.findProto('cosmos/auth/v1beta1/query.proto');
  const res = traverse(store, ref);
  const service: ProtoService = getNestedProto(res).Query;
  const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
  expectCode(buildRpcStores(context, service));
});
