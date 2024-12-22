import { Product } from "./model";
import { Product as ProductType } from "../../interface";

export class ProductService {
  static async getAll() {
    return await Product.find();
  }
  static async getOne(id: string) {
    return await Product.findById(id);
  }
  static async Add(data: ProductType) {
    return await Product.create(data);
  }
  static async updateById(id: string, data: Partial<ProductType>) {
    return await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }
  static async deleteById(id: string) {
    return await Product.findByIdAndDelete(id);
  }
}
