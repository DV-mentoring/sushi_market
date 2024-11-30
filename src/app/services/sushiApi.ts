import axios from "axios";

const API_KEY_ENV = process.env.NEXT_PUBLIC_API_URL;

const sushiApi = {
    getSushiSets: async(page: number, limit:number) => {
      try {
        const response = await axios.get(`https://${API_KEY_ENV}.mockapi.io/Sets/?page=${page}&limit=${limit}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
}

export default sushiApi;