import Product from "../../Product Page/Product/Product";
import "./SearchProductWrapper.css";
function SearchProductWrapper(props) {
  return (
    <div className="SearchProductWrapper">
      {props.searchedArr.map((product) => {
        return (
          <Product
            closeHambargar={props.closeHambargar}
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
