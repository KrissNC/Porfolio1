import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Un florilège de mes travaux</h1>
        <p className="pl-desc">
          Voici un échantillon de diverses réalisations de ces dernières années, elles mettent en lumière à la fois une compétence large et variée, ainsi que ma capacité à rester en phase avec l'informatique.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
