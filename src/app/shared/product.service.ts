import { Subject } from 'rxjs/Subject';

import { Product } from './product.model';

export class ProductService {
  productsChanged = new Subject<Product[]>();

  private products: Product[ ]=[
new Product(1,"Baguette","https://imgur.com/ZvN96gJ.jpg",1,"Homemade baguette baked daily",1.95,20,1),
new Product(2,"Caramel Popcorn","https://imgur.com/XxXpjw3.jpg",1,"Homemade Carmel Popcorn",5.85,25,5),
new Product(3,"Chocolate Chip Cookies","https://imgur.com/ypL5u7L.jpg",1,"Homemade chocolate chip cookies baked daily",9.5,25,1),
new Product(4,"Chocolate Cupcakes","https://imgur.com/d3q7psC.jpg",1,"Homemade Carmel Cupcakes",8.4,15,1),
new Product(7,"Crostata alla Marmellata","https://imgur.com/XYWk8p1.jpg",2,"Homemade crostata alla marmellata baked daily",12,4,2),
new Product(9,"Espresso","https://imgur.com/Ig3LJt4.jpg",3,"Homemade espresso baked daily",3,100,4),
new Product(10,"Flax Sesame Bagel","https://imgur.com/uXFaNc2.jpg",3,"Homemade flax sesame bagel baked daily",1.5,32,1),
new Product(11,"Mini Tart","https://imgur.com/oGRKKaJ.jpg",3,"Homemade Carmel Tart",4,33,2),
new Product(12,"Nut Butter","https://imgur.com/nhbdK01.jpg",4,"Homemade Carmel Butter",22,15,3),
new Product(13,"Rasberry Jam","https://imgur.com/ZcF2BlJ.jpg",4,"Homemade Carmel Jam",6,10,3),
new Product(14,"Sourdough Bread","https://imgur.com/jZVkNF4.jpg",4,"Homemade Carmel Bread",3,12,1),
new Product(15,"Assorted Bagel","https://imgur.com/WkpQjDz.jpg",5,"Homemade Assorted Bagel, made daily",1.95,20,1),
new Product(16,"Blueberry Muffins","https://imgur.com/ItAc2Qg.jpg",5,"Homemade Blueberry Muffins, made daily",5.85,25,2),
new Product(17,"Assorted Donuts","https://imgur.com/kGMMF9U.jpg",5,"Homemade Assorted Donuts, made daily",9.5,25,2),
new Product(18,"Chocolate Croissant","https://imgur.com/r53QtJv.jpg",5,"Homemade Chocolate Croissant, made daily",8.4,15,2),
new Product(19,"Dried Fruit","https://imgur.com/MjurZVy.jpg",6,"Homemade Dried Fruit, made daily",2.5,35,4),
new Product(20,"Dried Apricots","https://imgur.com/XnPP9Mh.jpg",6,"Homemade Dried Apricots, made daily",3.5,30,4),
new Product(21,"Pecan Muffins","https://imgur.com/RPZB8qH.jpg",6,"Homemade Pecan Muffins, made daily",12,4,2),
new Product(22,"Rasberry Tart","https://imgur.com/cVy5jOW.jpg",6,"Homemade Rasberry Tart, made daily",8,22,2),
new Product(23,"Reeses Muffin","https://imgur.com/5pTktlU.jpg",7,"Homemade Reeses Muffin, made daily",3,100,2),
new Product(24,"Zucchini Bread","https://imgur.com/M3sdu9N.jpg",7,"Homemade Zucchini Bread, made daily",1.5,32,2),
new Product(25,"Assorted Bagels","https://imgur.com/8lfiF28.jpg",8,"Homemade Assorted Bagels, made daily",4,33,1),
new Product(26,"Brownies","https://imgur.com/GpjZKHK.jpg",8,"Homemade Brownies, made daily",22,15,2),


  ];

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  addProducts(products: Product[]) {
    this.products.push(...products);
    this.productsChanged.next(this.products.slice());
  }

  updateProduct(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}
