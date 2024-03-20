import axios from "axios";
export const httpAxios = axios.create({
  baseURL: process.env.POSTGRES_PRISMA_URL,
});
