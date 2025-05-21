import HttpClient from "./HttpClient";

const MapService = {
  getListDestination: async () => {
    const res = await HttpClient.setHeader(
      "x-Api-key",
      "762f93615641162accd66ed831d8e507"
    )
      .travelIndex()
      .post("/app/front/travelindex/resources/map", {
        city_id: 255,
      });

    if (res.status === 200) {
      return res.data;
    }
  },
  getDetailDestination: async (id) => {
    const res = await HttpClient
      .travelIndex()
      .get(`app/front/travelindex/resource/detail/${id}`,{
        withCredentials:false
      });
    if (res.status === 200) {
      return res.data;
    }
  },
};

export default MapService;
