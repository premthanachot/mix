import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjdmOTI3YzkyMDFmNzU3MjdkZDM3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc4Njk4OSwiZXhwIjoxNjQ0MDQ2MTg5fQ.QGZU29AhRIM7vfbPIQZJtp0iddzR27cKVPy16qbBkpo";

export const pubilcRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
