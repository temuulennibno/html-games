import { ProductCard } from "./components/product-card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  const { products } = data;

  return (
    <main>
      <section>
        <div className="container">
          <select name="" id="">
            <option value="">Select category...</option>
            <option value="">Beauty</option>
          </select>
          <div className="row">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
