// import { AxiosError } from "axios";
// import { isArray } from "lodash";
// // import { toast } from "react-toastify";

// export const handleApiError = (error: AxiosError, customMessage) => {
//   if (error.response) {
//     const { statusCode, message } = error.response.data;
//     if (customMessage) {
//       //   toast.error(customMessage);
//     } else if (statusCode == 412) {
//       // console.log(message);
//     } else if (statusCode !== 401) {
//       if (isArray(message)) {
//         // toast.error(message.join(", "));
//       } else {
//         // toast.error(message);
//       }
//     }
//     return error.response.data;
//   }

//   if (error.request) {
//     // toast.error("Network error");
//     return { message: "Network error" };
//   }
//   throw error;
// };
