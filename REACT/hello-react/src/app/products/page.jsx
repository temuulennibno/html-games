import Link from "next/link";
import { ProductCard } from "../components/product-card";

export default async function Products(props) {
  const { categorySlug, skip, limit } = props.searchParams;

  let finalSkip = 0;
  let finalLimit = 30;
  let totalProducts = 0;

  if (skip) {
    finalSkip = skip;
  }
  if (limit) {
    finalLimit = limit;
  }

  const categoryResponse = await fetch("https://dummyjson.com/products/categories");
  const categories = await categoryResponse.json();

  const filteringCategory = categories.find((category) => category.slug === categorySlug);

  let products = [];
  if (categorySlug) {
    const response = await fetch(`https://dummyjson.com/products/category/${filteringCategory.slug}?limit=${finalLimit}&skip=${finalSkip}`);
    const data = await response.json();
    totalProducts = data.total;
    products = data.products;
  } else {
    const response = await fetch(`https://dummyjson.com/products?limit=${finalLimit}&skip=${finalSkip}`);
    const data = await response.json();
    totalProducts = data.total;
    products = data.products;
  }

  const totalPages = Math.ceil(totalProducts / finalLimit);

  return (
    <main>
      <section>
        <div className="container">
          <form action="/products">
            <select name="categorySlug" id="">
              <option value="">Select category...</option>
              {categories.map((category) => (
                <option selected={filteringCategory?.slug === category.slug} key={category.slug} value={category.slug}>
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
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
            {totalPages > 1 && (
              <>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Link key={`pagination-${index}`} href={`/products?skip=${finalLimit * index}&limit=${finalLimit}`} className="product-button">
                    {index + 1}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
