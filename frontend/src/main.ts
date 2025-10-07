import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import { definePreset } from '@primeuix/themes'
import 'primeicons/primeicons.css'
import 'tailwindcss';

const MyPreset = definePreset(Lara, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
          600: '{blue.600}',
          700: '{blue.700}',
          800: '{blue.800}',
          900: '{blue.900}',
          950: '{blue.950}',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p-',
      darkModeSelector: 'system',
      ripple: true,
      inputVariant: 'filled',
    },
  },
})

app.mount('#app')
