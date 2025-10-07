<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'

const email = ref('')
const password = ref('')

const handleGoogleSignIn = () => {
  console.log('Continue with Google')
  // Add your Google OAuth logic here
}

const handleSubmit = () => {
  console.log('Sign in with:', { email: email.value, password: password.value })
  // Add your authentication logic here
}
</script>

<template>
  <div>
    <Card class="w-full max-w-md mx-auto mt-10 p-6">
      <template #title>
        <div>
          <h1>Team Tempo</h1>
          <p>Sign in to manage your team</p>
        </div>
      </template>
      <template #content>
        <!-- Google Sign In Button -->
        <Button 
          @click="handleGoogleSignIn"
          severity="secondary"
          variant="outlined"
          fluid
          class="google-button"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
            <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184L12.05 13.56c-.806.54-1.837.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z" fill="#34A853"/>
            <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
          </svg>
          <span>Continue with Google</span>
        </Button>

        <Divider class="mb-8 mt-8">
          <span class="divider-text">OR</span>
        </Divider>

        <!-- Email/Password Form -->
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="email">Email or Username</label>
            <InputText 
              id="email"
              v-model="email" 
              type="text"
              placeholder="Enter your email"
              fluid
              autocomplete="username"
            />
          </div>

          <div class="mb-4">
            <label for="password">Password</label>
            <Password 
              id="password"
              v-model="password" 
              :feedback="false"
              toggleMask
              placeholder="Enter your password"
              fluid
              autocomplete="current-password"
            />
          </div>

          <div>
            <a href="#">Forgot password?</a>
          </div>

          <Button 
            type="submit" 
            label="Sign in" 
            severity="primary"
            fluid
            :disabled="!email || !password"
          />
        </form>
      </template>
      <template #footer>
        <div>
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </template>
    </Card>
  </div>
</template>

