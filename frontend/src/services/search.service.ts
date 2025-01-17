import axiosInstance from "@/services/axios.config";
import { BaseService } from "@/services/base.service";

class SearchService extends BaseService {

  searchDocuments(query: string, page = 0, size = 10) {
    return axiosInstance.get(`/search/api/v1/search`, {
      params: {
        query,
        page,
        size
      }
    });
  }

  suggestions(query: string, page = 0, size = 10) {
    return axiosInstance.get(`/search/api/v1/search/suggestions`, {
      params: {
        query
      }
    });
  }
}

export const searchService = new SearchService();
