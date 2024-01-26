const formatCurrency = (value, currency) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currncy: "BRL",

  });
};

export default formatCurrency;
