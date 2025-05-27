import type { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

class DataService {
   endpoint: string;
   requests?: AxiosRequestConfig;

   constructor(endpoint: string, requests?: AxiosRequestConfig) {
      this.endpoint = endpoint;
      this.requests = requests;
   }

   getAllData() {
      const controller = new AbortController();
      const response = apiClient.get(this.endpoint, {
         signal: controller.signal,
         ...this.requests,
      });

      return { response, controller };
   }
}

const create = (endpoint: string, request?: AxiosRequestConfig) =>
   new DataService(endpoint, request);

export default create;
