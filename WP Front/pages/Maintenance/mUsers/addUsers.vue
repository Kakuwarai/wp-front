
<style>
.example-showcase .el-loading-mask {
    z-index: 9;
}
</style>
<template>
    <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-60">
                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                </a>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Maintenance</span>
                </div>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <a class="cursor-pointer ml-1 text-sm font-medium text-gray-700  md:ml-2 " @click="$router.replace('/maintenance/mUsers/users')">Users</a>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Add</span>
                </div>
            </li>
        </ol>
    </nav>

    <br>

    <div v-loading="loadingBranch" element-loading-text="Loading..." :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50" element-loading-background="rgba(255, 255, 255, 0.8)"
        style="width: 100%" class="flex flex-wrap">
        <div class="w-full rounded-3xl bg-white p-6 shadow :bg-gray-900">




            <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">

                    <template #content>
                        <div class="flex items-center">

                            <span class="text-large font-600 mr-3"> Users </span>

                            <el-tag>Add</el-tag>
                        </div>
                    </template>
                </el-page-header>
            </div>
            <br>

            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                <div class="w-full">
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Firstname<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="selectedUserDetails.firstname" @keypress="cancelError('fname')"
                            :class="errorFirstname == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorFirstname == true ? 'Please enter firstname!' : 'Enter firstname'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Middlename
                        </label>
                        <input type="text" v-model="selectedUserDetails.middlename" placeholder="Enter middlename"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Lastname<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="selectedUserDetails.lastname" @keypress="cancelError('lname')"
                            :class="errorLastname == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorLastname == true ? 'Please enter lastname!' : 'Enter lastname'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Nickname
                        </label>
                        <input type="text" v-model="selectedUserDetails.nickname" placeholder="Enter nickname"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>

                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Position<span
                                class="text-red-600">*</span>
                        </label>

                        <el-select @click="cancelError('position')"
                            :class="errorPosition == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            v-model="selectedUserDetails.position" class="w-full"  filterable allow-create default-first-option
                            :reserve-keyword="false" placeholder="Choose tags for your article">
                            <el-option v-for="item in optionsPosition" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <p v-if="errorPosition == true" class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                class="font-medium">Empty!</span> Please select Position.</p>
                    </div>

                </div>
                <div class="w-full">
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Username/Password<span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="selectedUserDetails.username" @keypress="cancelError('username')"
                            :class="errorUsername == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorUsername == true ? 'Please enter username!' : 'Enter username'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Contact
                            number
                        </label>
                        <input type="text" v-model="selectedUserDetails.contactNumber" placeholder="Enter contact number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Email
                            Address<span class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="selectedUserDetails.emailAddress" @keypress="cancelError('email')"
                            :class="errorEmail == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            :placeholder="errorEmail == true ? 'Please enter email!' : 'Enter email'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500">
                    </div>
                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">User type<span
                                class="text-red-600">*</span>
                        </label>


                        <select id="countries" v-model="selectedUserDetails.type"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
                            <option :selected="selectedUserDetails.type == 'Admin'" value="Admin">Admin
                            </option>
                            <option :selected="selectedUserDetails.type == 'User'" value="User">User
                            </option>

                        </select>

                    </div>

                    <div class="w-full">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 :text-white">Branches<span
                                class="text-red-600">*</span>
                        </label>

                        <el-select @click="cancelError('branch')"
                            :class="errorBranches == true ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''"
                            v-model="userBranch" class="w-full" multiple filterable allow-create default-first-option
                            :reserve-keyword="false" placeholder="Choose tags for your article">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                        <p v-if="errorBranches == true" class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                class="font-medium">Empty!</span> Please select atleast one branch.</p>
                    </div>
                 
                </div>


                <div>

                    <button type="button" @click="savebutton()" :disabled="loadingSave"
                        class="text-white bg-[#3b984a] hover:bg-[#3b984a]/90 focus:ring-4 focus:outline-none focus:ring-[#3b984a]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center :focus:ring-[#3b984a]/55 mr-2 mb-2">

                        <svg v-if="loadingSave == true" aria-hidden="true"
                            class="w-4 h-4 mr-2 text-gray-200 animate-spin :text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>

                        <svg v-else class=" mr-1 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                            <polyline points="17 21 17 13 7 13 7 21" />
                            <polyline points="7 3 7 8 15 8" />
                        </svg>
                        <span v-if="loadingSave"> Adding </span>
                        <span v-else> Add </span>
                        <svg v-if="loadingSave" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15px" height="10px"
                            viewBox="0 0 80 20">
                            <circle cx="10" cy="20" r="10" fill="#FFFFFF">
                                <animate attributeName="cx" from="10" to="40" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="10" cy="10" r="0" fill="#FFFFFF">
                                <animate attributeName="r" from="0" to="10" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="40" cy="10" r="10" fill="#FFFFFF">
                                <animate attributeName="cx" from="40" to="70" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                            <circle cx="70" cy="10" r="10" fill="#FFFFFF">
                                <animate attributeName="r" from="10" to="0" dur="0.5s" calcMode="spline"
                                    keySplines="0.42 0 0.58 1" keyTimes="0;1" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </button>
                </div>


            </div>


        </div>
    </div>
</template>
    
<script setup>
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ref } from "vue";
import { globalAPI, swalLoad, swalPopUp, slawStatusPopUpError, slawStatusPopUp } from '@/services/globalFunctions'
import Paginate from 'vuejs-paginate-next';
import Swal from 'sweetalert2';

const selectedUserDetails = ref({
'firstname':'',
'middlename':'',
'lastname':'',
'nickname':'',
'username':'',
'emailAddress':'',
'position':'',
'contactNumber':'',
'type':'User',
}),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    userBranch = ref([]),
    options = ref([]),
    optionsPosition = ref([]),
    loadingBranch = ref(false),
    loadingSave = ref(false),
    router = useRouter(), svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,
    errorFirstname = ref(false),
    errorLastname = ref(false),
    errorUsername = ref(false),
    errorEmail = ref(false),
    errorBranches = ref(false),
    errorPosition = ref(false),
    txtSave = ref('Save')
// loadingInstance2  = ElLoading.service({ fullscreen: true })

const onBack = () => {
    router.replace('/maintenance/mUsers/users')
}

onMounted(() => {
    userBranchAPICall()
})

async function userBranchAPICall() {
    loadingBranch.value = true
    await globalAPI().post(`MUsers/userBranchAdd?selectedUserId=${userDetails.value.id}`)
        .then(async (response) => {

            if (response.status == 200) {

                response.data.availableBranches.forEach(branchValues => {
                    options.value.push({
                        value: branchValues.code,
                        label: branchValues.name,
                    });
                });
                response.data.position.forEach(position => {
                    optionsPosition.value.push({
                        value: position.code,
                        label: position.name,
                    });
                });
                //optionsPosition

                loadingBranch.value = false

            }
            else if (response.status == 202 || response.status == 401) {

                loadingBranch.value = false
                slawStatusPopUpError(response.data)

            } else {
                loadingBranch.value = false
                slawStatusPopUpError(response.data)
            }

        }).catch((error) => {
            loadingBranch.value = false
            swalPopUp(error, "Can't connect to server")

        })

}

function cancelError(input) {
    if (input == 'fname') {
        errorFirstname.value = false
    } else if (input == 'lname') {
        errorLastname.value = false
    }
    else if (input == 'username') {
        errorUsername.value = false
    }
    else if (input == 'email') {
        errorEmail.value = false
    }
    else if (input == 'branch') {
        errorBranches.value = false
    }else if(input == 'position'){
        errorPosition.value = false
    }
}

async function savebutton() {

    if (selectedUserDetails.value.firstname == '') {
        errorFirstname.value = true
    } if (selectedUserDetails.value.lastname == '') {
        errorLastname.value = true
    }
    if (selectedUserDetails.value.username == '') {
        errorUsername.value = true
    }
    if (selectedUserDetails.value.emailAddress == '') {
        errorEmail.value = true
    }
    if (userBranch.value.length == 0) {
        errorBranches.value = true
    }
    if (selectedUserDetails.value.position == '') {
        errorPosition.value = true
    }

if(userBranch.value.length != 0 &&
 selectedUserDetails.value.emailAddress != '' &&
  selectedUserDetails.value.username != '' &&
   selectedUserDetails.value.lastname != ''&&
   selectedUserDetails.value.firstname != ''&&
   selectedUserDetails.value.position != ''){



        loadingSave.value = true
        await globalAPI().post(`MUsers/userTableAddSave?branches=${userBranch.value.toString()}&userId=${userDetails.value.id}`,
            {
                userId: userDetails.value.id,
                Id: selectedUserDetails.value.id,
                FirstName: selectedUserDetails.value.firstname,
                MiddleName: selectedUserDetails.value.middlename,
                LastName: selectedUserDetails.value.lastname,
                Nickname: selectedUserDetails.value.nickname,
                Username: selectedUserDetails.value.username,
                ContactNumber: selectedUserDetails.value.contactNumber,
                PositionCode: selectedUserDetails.value.position,
                EmailAddress: selectedUserDetails.value.emailAddress,
                Type: selectedUserDetails.value.type,
                branches:userBranch.value.toString()
            }
        )
            .then(async (response) => {

                if (response.status == 200) {

                    slawStatusPopUp("Success")
                    router.replace('/maintenance/mUsers/users')
                    loadingSave.value = false

                }
                else if (response.status == 202 || response.status == 401) {

                    loadingSave.value = false
                    slawStatusPopUpError(response.data)

                } else {
                    loadingSave.value = false
                    slawStatusPopUpError(response.data)
                }

            }).catch((error) => {
                loadingSave.value = false
                swalPopUp(error, "Can't connect to server")

            })
     }
    
     

}

</script>