module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: undefined
      }
    },
  },
  viteFinal: async (config) => {
    // Set proper build target to support BigInt and modern features
    config.build = config.build || {};
    config.build.target = 'es2020';
    config.build.sourcemap = false;
    config.build.minify = false;
    
    // Configure esbuild options
    config.esbuild = config.esbuild || {};
    config.esbuild.target = 'es2020';
    config.esbuild.format = 'esm';
    
    // Define global variables for browser compatibility
    config.define = config.define || {};
    config.define.global = 'globalThis';
    config.define.process = JSON.stringify({ 
      env: { NODE_ENV: 'production' },
      platform: 'browser',
      version: '18.0.0'
    });
    // Remove the problematic define that causes Vite build error
    // config.define.__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__ = 'globalThis.__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__ || []';
    config.define.__REACT__ = JSON.stringify('18.2.0');
    
    // Configure resolve options
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    
    // Provide browser-compatible alternatives for Node.js modules
    config.resolve.alias = {
      ...config.resolve.alias,
      'node:module': false,
      'node:url': false,
      'node:path': false,
      'node:fs': false,
      'node:os': false,
      'node:util': false,
      'module': false,
      'url': false,
      'path': false,
      'fs': false,
      'os': false,
      'util': false,
    };
    
    // Configure external modules to prevent bundling
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.external = config.build.rollupOptions.external || [];
    config.build.rollupOptions.external.push(
      'node:module',
      'node:url', 
      'node:path',
      'node:fs',
      'node:os',
      'node:util'
    );
    
    return config;
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
