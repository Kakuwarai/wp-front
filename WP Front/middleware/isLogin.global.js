export default defineNuxtRouteMiddleware((to,from) => {

  const UserToken = typeof window !== 'undefined' ? localStorage.getItem('login') : null;

  
if(to.path == "/"){

     if(UserToken != null){
      return navigateTo('/dashboard')
  }
  }else{
    if(UserToken == null){
      return navigateTo('/')
  }
}

  })