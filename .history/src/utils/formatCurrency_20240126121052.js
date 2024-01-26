const formatCurrency = (value) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currncy: "BRL",

  });
};

export default formatCurrency;
