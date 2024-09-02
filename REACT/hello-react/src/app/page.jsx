import Link from "next/link";
import { ProductCard } from "./components/product-card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products?limit=6");
  const data = await response.json();
  const { products } = data;

  const categoryResponse = await fetch("https://dummyjson.com/products/categories");
  const categories = await categoryResponse.json();

  return (
    <main>
      <section>
        <div className="container">
          <form action="/products">
            <select name="categorySlug" id="">
              <option value="">Select category...</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
            <button>search</button>
          </form>
          <div className="row">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href={`/products`} className="product-button">
              Read more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
