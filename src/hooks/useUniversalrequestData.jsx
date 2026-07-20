import axios from "axios";

const BASE_URL = "https://6a26c767a84f9d39e907e1b6.mockapi.io";

export const postData = async (endpoint, body = {}) => {
  const controller = new AbortController();

  try {
    const res = await axios.post(
      `${BASE_URL}/${endpoint}`,
      body,
      {
        signal: controller.signal,
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const putData = async (endpoint, id, body = {}) => {
  const controller = new AbortController();

  try {
    const res = await axios.put(
      `${BASE_URL}/${endpoint}/${id}`,
      body,
      {
        signal: controller.signal,
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const patchData = async (endpoint, id, body = {}) => {
  const controller = new AbortController();

  try {
    const res = await axios.patch(
      `${BASE_URL}/${endpoint}/${id}`,
      body,
      {
        signal: controller.signal,
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const deleteData = async (endpoint, id) => {
  const controller = new AbortController();

  try {
    const res = await axios.delete(
      `${BASE_URL}/${endpoint}/${id}`,
      {
        signal: controller.signal,
      }
    );

    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};