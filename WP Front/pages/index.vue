<template>
<div>
    <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
            </a>
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="flex items-center text-xl font-extrabold ">Warehousing<span class="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Proposal</span></h1>
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Sign in to your account
                    </h1>
                    
<form v-on:submit.prevent="" >
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Username/Email</label>
    <input v-model="emailInput" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@fast.com.ph" required>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
    <input v-model="passwordInput" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="*******" required>
  </div>
  
  <fieldset :disabled="loading">
                          </fieldset>
  <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" @click="login()">Login</button>
</form>

                </div> 
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { globalAPI, swalPopUp, swalLoad, slawStatusPopUpError, slawStatusPopUpWarning } from '@/services/globalFunctions'
const emailInput = ref('');
const passwordInput = ref('');
const router = useRouter();
const loading = ref();
definePageMeta({
  layout: 'empty'
});

onMounted(()=>{

   
})

async function login() {
   
    if(emailInput.value != '' &&  passwordInput.value != ''){
        swalLoad("Logging in...", "Checking login account")
        await globalAPI().post(`Login/login?userNE=${emailInput.value}&password=${passwordInput.value}`)
.then( async(response) => {

            if (response.status == 200) {
               
                localStorage.setItem("login",JSON.stringify(response.data.logChecker) )
                localStorage.setItem("branches",JSON.stringify(response.data.selectedUserBranches) )
                //localStorage.setItem("menus",JSON.stringify(response.data.menus) )
                localStorage.setItem('menuList',JSON.stringify(response.data.menuList))
                localStorage.setItem('parent',JSON.stringify(response.data.parent))
             
                
                Swal.close();
                router.replace('/dashboard')
            }
            else if (response.status == 202 || response.status == 401) {
              
               
                slawStatusPopUpError(response.data)
                
            } else {
            
                slawStatusPopUpError(response.data)
            }

        }).catch((error) => {
           console.log(error);
            swalPopUp(error, "Can't connect to server")

        })
    }else{
      
       
        slawStatusPopUpWarning("Please insert data")
    }


//  if(emailInput.value == "mjfalvarez@fast.com.ph" && passwordInput.value == "mjfalvarez"){
//   router.replace('/dashboard')
//  }else{
  
//       Swal.fire({
//         icon: 'error',
//         iconColor: 'red',
//         title: "Wrong Email or password"
//       });
//  }
}
</script>

<style scoped>
.loader{
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('../static/Loader.gif');
    background-size: 50px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    animation-duration: 5s;
    filter: alpha(opacity=40);
}
</style>