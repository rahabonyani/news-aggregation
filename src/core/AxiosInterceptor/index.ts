import axios, { AxiosInstance, AxiosStatic } from "axios";

let isInstalledOnStaticObject = false;

export const installInterceptor = (axios: AxiosInstance | AxiosStatic) => {

  axios.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      return Promise.reject(error);
    }
  );
};

if (!isInstalledOnStaticObject) {
  isInstalledOnStaticObject = true;
  installInterceptor(axios);
}