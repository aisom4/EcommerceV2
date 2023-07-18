import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pageStyling/Products.css";

//setting up variables for storing products, filter products, and filter criteria
const Products = () => {
  //use state defines state variables
  const [products, setProducts] = useState([]); //storing fetched json products
  const [filterItemsProducts, setfilterItemsProducts] = useState([]); //stores filter products
  const [priceFilter, setPriceFilter] = useState(""); //stores selected price filter
  const [typeFilter, setTypeFilter] = useState(""); //stores selected type filter

  // Fetch products data from the API

  useEffect(() => {
    //a hook used to fetch product data from api when the component mounts.
    axios
      .get("http://localhost:3333/api/products")
      .then((response) => {
        setProducts(response.data); //fetched data is stored in product variable
        setfilterItemsProducts(response.data); //fetched data is also stored here and initializing with all of the products
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Apply filters when priceFilter or typeFilter changes
  useEffect(() => {
    albumFilter();
  }, [priceFilter, typeFilter]);

  // Apply filters to the products based on the filter criteria
  const albumFilter = () => {
    let filterItems = [...products]; //creating a copy of the products array

    // Filter by price pulling the price information from the database
    if (priceFilter) {
      // Filter by price by comparing 'price' property of each product with the selected price filter
      filterItems = filterItems.filter(
        (product) => product.price <= parseInt(priceFilter)
      );
    }

    // Filter by type (the type information is based on the certain ids coming from the database table.)
    if (typeFilter) {
      let idsToFilter = [];
      if (typeFilter === "Top Sellers") {
        idsToFilter = [5, 9, 10, 3];
      } else if (typeFilter === "New Releases") {
        idsToFilter = [2, 3, 4];
      } else if (typeFilter === "Constant Rotation") {
        idsToFilter = [1, 5, 6, 9];
      } else if (typeFilter === "Verified Hits") {
        idsToFilter = [12, 11, 8, 7];
      }
      // Filter the products based on the selected type filter
      filterItems = filterItems.filter((product) =>
        idsToFilter.includes(product.id)
      );
    }

    // Update the filtered products in the 'filterItemsProducts' state variable
    setfilterItemsProducts(filterItems);
  };

  return (
    <div className="productsContainer">
      <h2>Products</h2>
      <div className="filterContainer">
        <label>
          Price:
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="50">Under $50</option>
            <option value="70">Under $70</option>
            <option value="80">Under $80</option>
            <option value="100">Under $100</option>
            <option value="150">Under $150</option>
          </select>
        </label>
        <label>
          Choose One:
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Top Sellers">Top Sellers</option>
            <option value="New Releases">New Releases</option>
            <option value="Constant Rotation">Constant Rotation</option>
            <option value="Verified Hits">Verified Hits</option>
          </select>
        </label>
      </div>
      <div className="cardGrid">
        {filterItemsProducts.map((product) => (
          <div key={product.id} className="card">
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
