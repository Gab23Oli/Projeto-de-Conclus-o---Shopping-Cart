const fetchProducts = async () => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

};

export default fetchProducts;
