type VidOptions = {
  length: number;
  prefix: string;
  characters: string;
};

type VidFunction = {
  (args?: Partial<VidOptions>): string;
  create(args?: Partial<VidOptions>): () => string;
};

const defaultOptions: VidOptions = {
  length: 32,
  prefix: '',
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
};

function generate(options: VidOptions) {
  let result = options.prefix;
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * options.characters.length);
    result += options.characters.charAt(randomIndex);
  }
  return result;
}

export const vid: VidFunction = Object.assign(
  (args: Partial<VidOptions> = {}) => {
    return generate({ ...defaultOptions, ...args });
  },
  {
    create: (args: Partial<VidOptions> = {}) => {
      return () => {
        return generate({ ...defaultOptions, ...args });
      };
    },
  },
);
