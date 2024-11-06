type UniqueIdOptions = {
  length: number;
  prefix: string;
  characters: string;
};

const defaultUniqueIdOptions: UniqueIdOptions = {
  length: 32,
  prefix: '',
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
};

export function uniqueId(customOptions: Partial<UniqueIdOptions> = {}) {
  const options = { ...defaultUniqueIdOptions, ...customOptions };
  let result = options.prefix;
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * options.characters.length);
    result += options.characters.charAt(randomIndex);
  }
  return result;
}

export function uuid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.trunc(Math.random() * 16);
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
