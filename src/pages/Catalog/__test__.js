const { describe, test, expect } = require("jest");

const filterCat = (filterName, productList) => {
  const filteredCat = productList.filter((cat) => cat.category === filterName);
  return filteredCat;
};

describe("filterCat", () => {
  test("should filter products by category", () => {
    const productList = [
      { category: "electronics", name: "Laptop" },
      { category: "electronics", name: "Smartphone" },
      { category: "clothing", name: "T-Shirt" },
    ];

    const result = filterCat("electronics", productList);

    expect(result).toEqual([
      { category: "electronics", name: "Laptop" },
      { category: "electronics", name: "Smartphone" },
    ]);
  });

  test("should return an empty array if no products match the category", () => {
    const productList = [
      { category: "electronics", name: "Laptop" },
      { category: "electronics", name: "Smartphone" },
      { category: "clothing", name: "T-Shirt" },
    ];

    const result = filterCat("books", productList);

    expect(result).toEqual([]);
  });
});
