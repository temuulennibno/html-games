export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const { products } = data;

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="cards">
          {products.map((product) => (
            <Card key={product.id} image={product.thumbnail} title={product.title} price={`$${product.price}`} />
          ))}
        </div>
      </main>
    </div>
  );
}

const Card = (props) => {
  const { image, title, price } = props;

  return (
    <article className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <div className="card-detail">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="card-btn">Read more</div>
      </div>
    </article>
  );
};
