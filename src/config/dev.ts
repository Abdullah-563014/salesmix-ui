import { Store } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

const { REACT_APP_BASE_URL } = import.meta.env;
let store: Store;

export const injectStoreToAxios = (_store: Store) => {
  store = _store;
};

export function getDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes("android");
  const isTablet = isAndroid && !userAgent.includes("mobile");
  const isMobile = isAndroid && userAgent.includes("mobile");
  const isDesktop = !isAndroid;
  return isTablet ? "Tablet" : isMobile ? "Mobile" : isDesktop ? "Desktop" : "Desktop";
}

/** Extract Device Information */
const ua: string = navigator.userAgent;
let tem: string[] | null = [];
let M: string[] = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

if (/trident/i.test(M[1])) {
  tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
  // return { name: 'IE ', version: (tem[1] || '') };
}

if (M[1] === "Chrome") {
  tem = ua.match(/\bOPR\/(\d+)/);
  // if (tem != null) { return { name: 'Opera', version: tem[1] }; }
}

M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
if ((tem = ua.match(/version\/(\d+)/i)) != null) {
  M.splice(1, 1, tem[1]);
}

const deviceType = getDeviceType();
const source = deviceType == "Mobile" ? "mobile" : deviceType == "Tablet" ? "tablet" : "web";
const platform = navigator.platform;
const browser = M[0];
const version = M[1];
/** Extract Device Information */

export const client = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

const queuedRequests: Function[] = [];
const isRefreshing: boolean = false;

const executeQueuedRequests = (token: string) => {
  while (queuedRequests.length) {
    const queuedRequest: Function | undefined = queuedRequests.shift();

    if (queuedRequest) {
      queuedRequest(token);
    }
  }
};

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};

    if (!config.headers["x-authorization"]) {
      config.headers["x-authorization"] = `${store.getState().authReducer?.token}`;
    }

    config.headers["x-source"] = source;
    config.headers["x-platform"] = platform;
    config.headers["x-browser"] = browser;
    config.headers["x-version"] = version;
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// client.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   async (error: AxiosError) => {
//     if (error?.response?.status === 430 || error?.code == "ERR_NETWORK") {
//       queuedRequests = [];
//       store.dispatch(logoutSuccess());
//       // store.dispatch(resetToDefaultStateLiveReducer());
//       // toast.info("Refresh token error, please login again.");
//       return Promise.reject(error);
//     }

//     if (error?.response?.status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;

//         try {
//           // const response = await store.dispatch(getNewAccessToken()).unwrap();
//           const response = await store.dispatch(getNewAccessToken());
//           executeQueuedRequests(response.token);

//           if (error?.config) {
//             error.config.headers["x-authorization"] = response.token;
//             return client(error.config);
//           }
//         } catch (e: unknown) {
//           // if (error?.response?.status === 430) {
//           if (error?.status === 430) {
//             store.dispatch(logoutSuccess());
//             // toast.info("Refresh token error, please login again.");
//           }
//           return Promise.reject(error);
//         } finally {
//           isRefreshing = false;
//         }
//       } else {
//         return new Promise((resolve) => {
//           queuedRequests.push((token: string) => {
//             if (error?.config) {
//               error.config.headers["x-authorization"] = token;
//               resolve(client(error.config));
//             }
//           });
//         });
//       }
//     }

//     return Promise.reject(error);
//   }
// );

const request = function (options: AxiosRequestConfig, type?: string) {
  return client(options);
};

export default request;
