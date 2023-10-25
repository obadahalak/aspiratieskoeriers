async function getValue(data: any, key: any) {
  return await (data.find((e: any) => e.id === key)).lang
}
export { getValue }
