export interface HttpClient {
  get<T>(url: string, config?: RequestInit): Promise<T>;
  post<T>(url: string, body?: unknown, config?: RequestInit): Promise<T>;
}
