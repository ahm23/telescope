import {
    createLCDClient
} from './lcd';
import { traverse } from '@ahm23/telescope-proto-parser'
import { getNestedProto } from '@ahm23/telescope-utils'
import { defaultTelescopeOptions, ProtoService } from '@ahm23/telescope-types';
import { GenericParseContext } from '../../../encoding';
import { getTestProtoStore, expectCode, printCode } from '../../../../test-utils';
const store = getTestProtoStore();
// @ts-ignore
store.options.prototypes.parser.keepCase = true;
store.traverseAll();

it('cosmos/group/v1/query.proto', () => {
    const ref = store.findProto('cosmos/group/v1/query.proto');
    const res = traverse(store, ref);
    const service: ProtoService = getNestedProto(res).Query;
    const context = new GenericParseContext(ref, store, defaultTelescopeOptions);
    const ast = createLCDClient(context, service);
    expectCode(ast);
});
