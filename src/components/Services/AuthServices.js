import { Api } from "../Config/Api";
import DataService from "../Config/DataService";

export const LOGIN = async (data) => {
  try {
    const res = await DataService.post(Api.LOGIN, data);

    return res?.data;
  } catch (error) {
    return error;
  }
};

export const SEND_OTP = async (data) => {
  try {
    const res = await DataService.post(Api.SEND_OTP, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};

export const RESET_PASSWORD = async (data) => {
  try {
    const res = await DataService.post(Api.RESET_PASSWORD, data);
    return res?.data;
  } catch (error) {
    return error;
  }
};
