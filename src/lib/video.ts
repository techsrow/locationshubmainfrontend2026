/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";

export const videoApi = {
  async getAll() {
    const res = await api.get("/videos");
    return res.data;
  },

  async getById(id: string) {
    const res = await api.get(`/videos/${id}`);
    return res.data;
  },

  async create(data: any) {
    const res = await api.post("/videos", data);
    return res.data;
  },

  async update(id: string, data: any) {
    const res = await api.put(`/videos/${id}`, data);
    return res.data;
  },

  async delete(id: string) {
    const res = await api.delete(`/videos/${id}`);
    return res.data;
  },

  async reorder(data: any) {
    const res = await api.put(
      "/videos/reorder",
      data
    );
    return res.data;
  },
};