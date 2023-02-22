<template>
  <header class="fixed header">
    <nav  class="nav w-20 min-h-screen text-white-500 flex justify-center items-center">
      <ul>
        <li class="mb-5 mt-5">
          <NuxtLink to="/">
          <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path class="primary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              <path class="secondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"></path>
            </svg>

          </NuxtLink>
        </li>
        <li class="mb-5 mt-5">
          <NuxtLink to="/movie">
            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
          </NuxtLink>
        </li>
        <li class="mb-5 mt-5">
          <NuxtLink to="/tv">
            <svg fill="currentColor" width="24" height="24"><path d="M21 6h-8.586l2.293-2.293-1.414-1.414L10 5.586 6.707 2.293 5.293 3.707 7.586 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 3v2h-2V9h2zm-2 4h2v2h-2v-2zM4 8h11v10H4V8z"></path></svg>
          </NuxtLink>
          </li>
        <li class="mb-5 mt-5">
          <NuxtLink to="/search">
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
          </NuxtLink>
        </li>
        <li class="mb-5 mt-5">
          <NuxtLink to="/genres">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="m8 16 5.991-2L16 8l-6 2z"/></svg>
          </NuxtLink>
        </li>
        <li class="mb-5 mt-5">
          <NuxtLink to="/">
             <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
          </NuxtLink>
        </li>
        
      </ul>
    </nav>
  </header>
</template>