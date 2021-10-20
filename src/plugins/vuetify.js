import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#D0E7FB',
        secondary: '#B0BEC5',
        button: '#64B5F6',

      },
      dark: {
        primary: '#039BE5',
        secondary: '#2F4046',
        button: '#507283',
      },
    },
  },
});