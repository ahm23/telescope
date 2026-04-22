interface Timestamp {
  seconds: number;
  nanos: number;
}

export function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1000) * 1000000;
  return {
    seconds,
    nanos
  };
}

export function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1000;
  millis += t.nanos / 1000000;
  return new Date(millis);
}

const timestampFromJSON = (object: any): Timestamp => {
  return {
    seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
    nanos: isSet(object.nanos) ? Number(object.nanos) : 0
  };
};

export function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return timestampFromJSON(o);
  }
}

function numberToLong(number: number) {
  return Math.trunc(number);
}
