import axios from 'axios'
import Swal from 'sweetalert2';

	export const globalAPI = () => {
	return axios.create({
		   //baseURL: 'https://apps.fastlogistics.com.ph/warehouseproposalapi/api/'
     baseURL: 'https://localhost:7152/api/'
    
});
} 


export function swalLoad(title,text) {


    return Swal.fire({
      title: title,
      text: text,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
       
      }
      // footer: '<a href="https://ticket.fastlogistics.com.ph/open.php">Report this problem?</a>'
    })


  }

export function swalPopUp(title,text) {
	Swal.fire({
	  icon: 'error',
	  title: `Status: ${title}`,
	  text: text,
	  footer: '<a href="https://ticket.fastlogistics.com.ph/open.php">Report this problem?</a>'
	})
  }

  export function slawStatusPopUp(title){
	const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        color: 'black',
        background: '#D1F2EB',
        showConfirmButton: false,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })
      Toast.fire({
        icon: 'success',
        iconColor: 'green',
        title: title
      })
  }

  export function slawStatusPopUpError(title){
    const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          color: 'black',
          background: '#FFECEC',
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        })
        Toast.fire({
          icon: 'error',
          iconColor: 'red',
          title: title
        })
    }

    export function slawStatusPopUpWarning(title){
      const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            color: 'black',
          
            showConfirmButton: false,
            timer: 2000,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
          })
          Toast.fire({
            icon: 'warning',
            iconColor: 'orange',
            title: title
          })
      }
  
  // import {OAuth2Client} from 'google-auth-library';
  // import http from 'http';
  // import url from 'url';
  // import open from 'open';
  // import destroyer from 'server-destroy';


//   import {google} from 'googleapis';
//   import key from '../pages/ontime-d9a38-firebase-adminsdk-lkmvc-5426098019.json';
// var MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
// var SCOPES = [MESSAGING_SCOPE];
// export function getAccessToken() {
//     return new Promise(function(resolve, reject) {
 
//         var jwtClient = new google.auth.JWT(
//             key.client_email,
//             null,
//             key.private_key,
//             SCOPES,
//             null
//         );
//         jwtClient.authorize(function(err, tokens) {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(tokens.access_token);
//         });
//    });
// }