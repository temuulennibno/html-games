import Image from "next/image";
import Link from "next/link";

export const ProductCard = (props) => {
  const { product } = props;

  return (
    <div className="product-card">
      <Image src={product.thumbnail} alt="Product Image" className="product-image" width={400} height={300} />
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <Link href={`/products/${product.id}`} className="product-button">
          Read more
        </Link>
      </div>
    </div>
  );
};
