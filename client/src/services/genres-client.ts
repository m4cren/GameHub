import apiClient from "./api-client";

class GenreService {
   getAllGenres() {
      const controller = new AbortController();
      const response = apiClient("/genres", { signal: controller.signal });

      return { response, controller };
   }
}

export default new GenreService();
