export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuff = new ArrayBuffer(length);
  const val = new Int8Array(newBuff, 0, length);
  val.set([value], position);
  return new DataView(newBuff);
}
