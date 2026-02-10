import { httpClient } from "@/config/httpClient";
import { ILocation } from "@/types/location/location.type";

export async function fetchLocationById(id: string): Promise<ILocation> {
  return httpClient.get<ILocation>(`/location/${id}`);
}
