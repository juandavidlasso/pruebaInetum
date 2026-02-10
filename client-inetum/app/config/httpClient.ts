import { HttpClient } from "@/types/httpClient/httpClient.type";
import { API_URL } from "./env";

async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw {
      status: res.status,
      message: error?.error || "Unexpected error",
    };
  }

  return res.json();
}

export const httpClient: HttpClient = {
  get: <T>(url: string, config: RequestInit) =>
    request<T>(url, { method: "GET", ...config }),

  post: <T>(url: string, body: object, config: RequestInit) =>
    request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...config,
    }),
};

// Axios
// const api = axios.create({
//   baseURL: "https://rickandmortyapi.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const httpClient: HttpClient = {
//   get: async <T>(url: string) => {
//     const { data } = await api.get<T>(url);
//     return data;
//   },

//   post: async <T>(url: string, body:RequestInit) => {
//     const { data } = await api.post<T>(url, body);
//     return data;
//   },
// };
