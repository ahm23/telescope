import { createLCDClient } from './lcd';
import { traverse } from '@cosmology/proto-parser'
import { getNestedProto } from '@ahm23/telescope-utils'
import { ProtoService } from '@ahm23/telescope-types';
import { GenericParseContext } from '../../../encoding';
import { getTestProtoStore, expectCode } from '../../../../test-utils';
const store = getTestProtoStore({
    classesUseArrowFunctions: true
});
store.traverseAll();

it('cosmos/group/v1/query.proto', () => {
    const ref = store.findProto('cosmos/group/v1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, store.options);
    const ast = createLCDClient(context, service);
    expectCode(ast);
});
