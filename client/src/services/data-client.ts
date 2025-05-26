import apiClient from "./api-client";

class DataService {
   endpoint: string;

   constructor(endpoint: string) {
      this.endpoint = endpoint;
   }

   getAllData() {
      const controller = new AbortController();
      const response = apiClient.get(this.endpoint, {
         signal: controller.signal,
      });

      return { response, controller };
   }
}

const create = (endpoint: string) => new DataService(endpoint);

export default create;
