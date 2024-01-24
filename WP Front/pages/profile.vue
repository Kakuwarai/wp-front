<template  >
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
                    <span class="ml-1 text-sm font-medium  md:ml-2 text-gray-400">Profile</span>
                </div>
            </li>

        </ol>
    </nav>

    <br>

    <div class="flex flex-wrap" v-loading="storageTypeLoading" element-loading-text="Loading..."
        :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(255, 255, 255, 0.8)" style="width: 100%">
        <div class="w-full rounded-3xl bg-white p-6 ">


            <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">

                    <template #content>
                        <div class="flex items-center">

                            <span class="text-large font-600 mr-3"> Profile </span>

                            <el-tag>Edit</el-tag>
                        </div>
                    </template>
                </el-page-header>
            </div>
            <br>

            <el-form :label-position="labelPosition" ref="formRef" :model="numberValidateForm" label-width="130px">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="w-full">

                        <el-form-item label="Username" prop="username" :rules="[
                            { required: true, message: 'username is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input disabled v-model.number="numberValidateForm.username" type="text"
                                autocomplete="off" />
                        </el-form-item>

                        <el-form-item label="firstname" prop="firstname" :rules="[
                            { required: true, message: 'firstname is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input v-model.number="numberValidateForm.firstname" type="text" autocomplete="off" />
                        </el-form-item>

                        <el-form-item label="Middlename" prop="middlename" :rules="[
                            { required: true, message: 'Middlename is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input v-model.number="numberValidateForm.middlename" type="text" autocomplete="off" />
                        </el-form-item>

                        <el-form-item label="Lastname" prop="lastname" :rules="[
                            { required: true, message: 'Lastname is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input v-model.number="numberValidateForm.lastname" type="text" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="Nickname" prop="nickname" :rules="[
                            { required: true, message: 'Nickname is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input v-model.number="numberValidateForm.nickname" type="text" autocomplete="off" />
                        </el-form-item>
                        <el-form-item label="Email Address" prop="emailAddress" :rules="[
                            { required: true, message: 'Email Address is required' },
                            // { type: 'string', message: 'age must be a number' },
                        ]">
                            <el-input v-model.number="numberValidateForm.emailAddress" type="text" autocomplete="off" />
                        </el-form-item>

                    </div>

                    <div class="w-full">



                        <button type="button" @click="visiblePassword = true"
                            class=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                            <svg class="mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>

                            Change password
                        </button>


                    </div>


                </div>
            </el-form>

            <br>

            <button type="button" @click="visible = true"
                class=" text-white bg-[#3b984a] hover:bg-[#3b984a]/90 focus:ring-4 focus:outline-none focus:ring-[#3b984a]/50 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b984a]/55 me-2 mb-2">
                <svg class="mr-2 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                </svg>

                Save
            </button>


        </div>
    </div>


    <el-dialog v-model="visible" :show-close="false" width="30%" class="min-w-[300px]">
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">Enter Password</h4>

                <hr class="bg-blac">
            </div>
        </template>


        <div>
            <el-form ref="formRef" :model="passwords">
                <el-form-item label="Password" prop="currentpassword" :rules="[
                    { required: true, message: 'password is required' },

                ]">
                    <el-input v-model="passwords.currentpassword" type="password" show-password="" />
                </el-form-item>
            </el-form>
            <br>
        </div>
        <div class="flex justify-end">

            <el-button type="primary" @click="savebutton()" :loading="loadingSave">
                <template #loading>
                    <div class="custom-loading">
                        <svg class="circular" viewBox="-10, -10, 50, 50">
                            <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)" />
                        </svg>
                    </div>
                </template>
                <span>Confirm</span>
            </el-button>

        </div>

    </el-dialog>


    <el-dialog v-model="visiblePassword" :show-close="false" width="30%" class="min-w-[300px]">
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">Change Password</h4>

                <hr class="bg-blac">
            </div>
        </template>


        <div>
            <el-form ref="formRef" :model="passwords">
                <el-form-item label="Current password" prop="currentpassword" :rules="[
                    { required: true, message: 'password is required' },

                ]">
                    <el-input v-model="passwords.currentpassword" type="password" show-password="" />
                </el-form-item>
                

                <el-form-item label="New password" prop="newpassword" :rules="[
                    { required: true, message: 'password is required' },

                ]">
                    <el-input v-model="passwords.newpassword" type="password" show-password="" />
                </el-form-item>

                <el-form-item label="Confirm password" prop="matchpassword" :rules="[
                    { required: true, message: 'password is required' },

                ]">
                    <el-input v-model="passwords.matchpassword" type="password" show-password="" />
                </el-form-item>

            </el-form>
            <br>
        </div>
        <div class="flex justify-end">

            <el-button type="primary" @click="savePassword()" :loading="loadingSave">
                <template #loading>
                    <div class="custom-loading">
                        <svg class="circular" viewBox="-10, -10, 50, 50">
                            <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)" />
                        </svg>
                    </div>
                </template>
                <span>Change password</span>
            </el-button>

        </div>

    </el-dialog>


</template>
  
<script setup>
import 'element-plus/dist/index.css'
import { ref } from "vue";
import { globalAPI, swalLoad, swalPopUp, slawStatusPopUpError, slawStatusPopUp } from '@/services/globalFunctions'
import Paginate from 'vuejs-paginate-next';
import Swal from 'sweetalert2';

const router = useRouter(),
    labelPosition = ref('left'),
    loadingSave = ref(false),
    userDetails = ref(JSON.parse(localStorage.getItem('login'))),
    visible = ref(false),
    visiblePassword = ref(false),
    passwords = ref({
        currentpassword: '',
        newpassword: '',
        matchpassword: ''

    }),
    onBack = () => {
        router.replace('/maintenance/mCustomer/customer')
    },
    numberValidateForm = ref({
        username: userDetails.value.username,
        firstname: userDetails.value.firstname,
        middlename: userDetails.value.middlename,
        lastname: userDetails.value.lastname,
        nickname: userDetails.value.nickname,
        emailAddress: userDetails.value.emailAddress

    })
onMounted(() => {
    console.log(userDetails.value);
})

async function savebutton() {

    if (numberValidateForm.value.username != '' &&
        numberValidateForm.value.firstname != '' &&
        numberValidateForm.value.middlename != '' &&
        numberValidateForm.value.lastname != '' &&
        numberValidateForm.value.emailAddress != '') {

        loadingSave.value = true
        await globalAPI().post(`Profile/saveProfile?`, {
            'id': userDetails.value.id,
            'username': numberValidateForm.value.username,
            'password': passwords.value.currentpassword,
            'lastname': numberValidateForm.value.lastname,
            'firstname': numberValidateForm.value.firstname,
            'middlename': numberValidateForm.value.middlename,
            'nickname': numberValidateForm.value.nickname,
            'emailAddress': numberValidateForm.value.emailAddress,
            'contactNumber': numberValidateForm.value.contactNumber,
        })
            .then(async (response) => {

                if (response.status == 200) {
                    slawStatusPopUp('Success!')
                    localStorage.clear();
                    sessionStorage.clear();
                    router.replace('/')
                    visible.value = false

                }
                else if (response.status == 202 || response.status == 401) {


                    slawStatusPopUpError(response.data)

                } else {

                    slawStatusPopUpError(response.data)
                }
                loadingSave.value = false

            }).catch((error) => {
                loadingSave.value = false
                swalPopUp(error, "Can't connect to server")

            })
    }
}

async function savePassword() {


  if(passwords.value.matchpassword != '' && passwords.value.matchpassword == passwords.value.newpassword){
    loadingSave.value = true
    await globalAPI().post(`Profile/changePassword?userId=${userDetails.value.id}&currentPassword=${passwords.value.currentpassword}&newPassword=${passwords.value.newpassword}`)
        .then(async (response) => {

            if (response.status == 200) {
                slawStatusPopUp('Success!')
                localStorage.clear();
                sessionStorage.clear();
                router.replace('/')
                visible.value = false

            }
            else if (response.status == 202 || response.status == 401) {


                slawStatusPopUpError(response.data)

            } else {

                slawStatusPopUpError(response.data)
            }
            loadingSave.value = false

        }).catch((error) => {
            loadingSave.value = false
            swalPopUp(error, "Can't connect to server")

        })
  }else{
    slawStatusPopUpError("Password doesn't match")
  }
}


</script>