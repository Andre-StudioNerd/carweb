import type { Category, Car } from "~/types";

const BIN_ID = "6ac7cb06ac6210605a202eda";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

interface JsonBinData {
  category?: Category[];
  car?: Car[];
}

interface JsonBinResponse {
  record: JsonBinData;
}

async function fetchBinData(): Promise<JsonBinData> {
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      // Se o seu bin for privado, adicione a Master Key:
      // "X-Master-Key": "<SUA_MASTER_KEY>",
    },
  });

  if (!response.ok) {
    throw new Response(`Falha ao carregar os dados do JSONBin`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  const data: JsonBinResponse = await response.json();
  return data.record;
}

export const api = {
  async getCategory(): Promise<Category[]> {
    const data = await fetchBinData();
    return data.category || [];
  },

  async getCategoryById(id: number | string): Promise<Category | undefined> {
    const categories = await this.getCategory();
    return categories.find((cat) => String(cat.id) === String(id));
  },

  async getCars(): Promise<Car[]> {
    const data = await fetchBinData();
    return data.car || [];
  },

  async getCarById(id: number | string): Promise<Car | undefined> {
    const cars = await this.getCars();
    return cars.find((car) => String(car.id) === String(id));
  },

  async getCarsByCategory(categoryId: number | string): Promise<Car[]> {
    const cars = await this.getCars();
    return cars.filter((car) => String(car.categoryId) === String(categoryId));
  },
};
