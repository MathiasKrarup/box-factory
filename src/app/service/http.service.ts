import { Injectable } from '@angular/core';
import axios from "axios";


export const customAxios = axios.create({
  baseURL: 'https://localhost:7087'
});

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  async getBoxes() {
    const httpResponse = await customAxios.get<any>('BoxFactory');
    return httpResponse.data;

  }

  async createBox(dto: { boxName: string; heigth: number; length: number; width: number; imageUrl: string; description: string }) {
    const httpResult = await customAxios.post<any>('BoxFactory', dto)
    return httpResult.data;
  }

  async deleteBox(id: any) {
    const httpsResult = await customAxios.delete('BoxFactory/'+id);
    return httpsResult.data;
  }
}
