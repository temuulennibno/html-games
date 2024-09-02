const Page = async (props) => {
  const { params } = props;
  const { id } = params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <main>
      <section>
        <div className="container">
          <div className="product-detail">
            <div className="product-img">
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
