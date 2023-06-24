import Product from "../../Product Page/Product/Product";
import "./SearchProductWrapper.css";
function SearchProductWrapper(props) {
  console.log(props.searchedArr);
  return (
    <div className="SearchProductWrapper">
      {props.searchedArr.map((product) => {
        return (
          <Product
            showDetailsList={true}
            key={Math.random()}
            id={product.id}
            data={product}
          />
        );
      })}
    </div>
  );
}

export default SearchProductWrapper;
