import HttpClient from "./HttpClient";

export const getListFAQs = async () => {
  try {
    const response = await HttpClient.tourdb().get("list-faq");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
