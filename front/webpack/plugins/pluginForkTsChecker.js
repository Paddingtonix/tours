import { join } from 'path';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { isDev, rootDir } from '../utils/env';

export const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin({
    async: isDev,
    typescript: {
        configFile: join(rootDir, '/tsconfig.json'),
    },
    eslint: { enabled: true, files: '../src/**/*.{ts,js}' },
    logger: { infrastructure: 'silent', issues: 'console' },
});
