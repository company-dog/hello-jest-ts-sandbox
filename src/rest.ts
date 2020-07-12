import axios from "axios";

export interface ResponseData {
  id: number;
  text: string;
}

export async function fetchData<T>(
  id: number
): Promise<{ status: number; data: T[] }> {
  const res = await axios.get<T[]>(`https://example.com`, { params: { id } });
  return {
    status: res.status,
    data: res.status === 404 ? [] : res.data,
  };
}
