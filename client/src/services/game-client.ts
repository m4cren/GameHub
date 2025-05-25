import apiClient from "./api-client";

class GameService {
   getAllGames() {
      const controller = new AbortController();
      const response = apiClient.get("/games", {
         signal: controller.signal,
      });

      return { controller, response };
   }
}

export default new GameService();
