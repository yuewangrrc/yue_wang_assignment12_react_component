export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    description: {
      component: 'Yue Wang\'s UI Garden components for Assignment 12',
    },
  },
};

export const tags = ['autodocs'];
