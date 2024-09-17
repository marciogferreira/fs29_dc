import axios from 'axios'
import Swal from 'sweetalert2';
const Api = axios.create({
    baseURL: 'http://localhost:3000/'
})

Api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error)
    Swal.fire({
        icon: "error",
        title: "Oops..",
        text: error.response.data,
    });
    return Promise.reject(error);
});

export default Api;