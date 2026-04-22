import { TelescopeOptions } from "@ahm23/telescope-types";

export const getHelperForNumber = (options: TelescopeOptions) => {
  return `import * as _m0 from "protobufjs/minimal";
import Long from 'long';

// @ts-ignore
if (_m0.util.Long !== Long) {
    _m0.util.Long = (Long as any);

    _m0.configure();
}

${options.useInterchainJs ?
    'export { fromBase64 as bytesFromBase64, toBase64 as base64FromBytes } from \'@interchainjs/encoding\';' :
    `declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
const _globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
    _globalThis.atob || ((b64) => _globalThis.Buffer.from(b64, 'base64').toString('binary'));

export function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    _globalThis.btoa || ((bin) => _globalThis.Buffer.from(bin, 'binary').toString('base64'));

export function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(''));
}`
}

export interface AminoHeight {
    readonly revision_number?: string;
    readonly revision_height?: string;
};

export function omitDefault<T extends string | number | boolean>(input: T): T | undefined {
    if (typeof input === "string") {
        return input === "" ? undefined : input;
    }

    if (typeof input === "number") {
        return input === 0 ? undefined : input;
    }

    if (typeof input === "boolean"){
      return input === false ? undefined : input;
    }

    throw new Error(\`Got unsupported type \${typeof input}\`);
};

interface Duration {
    seconds: number;
    nanos: number;
}

export function toDuration(duration: string): Duration {
    return {
        seconds: Math.floor(parseInt(duration) / 1000000000),
        nanos: parseInt(duration) % 1000000000
    };
};

export function fromDuration(duration: Duration): string {
    return (duration.seconds * 1000000000 + duration.nanos).toString();
};

export function isSet(value: any): boolean {
    return value !== null && value !== undefined;
};

export function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
};

export interface PageRequest {
    key: Uint8Array;
    offset: number;
    limit: number;
    countTotal: boolean;
    reverse: boolean;
};

export interface PageRequestParams {
    "pagination.key"?: string;
    "pagination.offset"?: string;
    "pagination.limit"?: string;
    "pagination.count_total"?: boolean;
    "pagination.reverse"?: boolean;
};

export interface Params {
    params: PageRequestParams;
};

export const setPaginationParams = (options: Params, pagination?: PageRequest) => {

    if (!pagination) {
        return options;
    }

    if (typeof pagination?.countTotal !== "undefined") {
        options.params['pagination.count_total'] = pagination.countTotal;
    }
    if (typeof pagination?.key !== "undefined") {
        options.params['pagination.key'] = Buffer.from(pagination.key).toString('base64');
    }
    if (typeof pagination?.limit !== "undefined") {
      options.params["pagination.limit"] = pagination.limit.toString()
    }
    if (typeof pagination?.offset !== "undefined") {
      options.params["pagination.offset"] = pagination.offset.toString()
    }
    if (typeof pagination?.reverse !== "undefined") {
        options.params['pagination.reverse'] = pagination.reverse;
    }

    return options;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
};

interface Timestamp {
    seconds: number;
    nanos: number;
}

export function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = date.getTime() % 1000 * 1000000;
    return {
        seconds,
        nanos
    };
};

export function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
};

const timestampFromJSON = (object: any): Timestamp => {
  return {
    seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
    nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
  };
}

export function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return timestampFromJSON(o);
  }
}

function numberToLong(number: number) {
    return Math.trunc(number);
}
`;
}
