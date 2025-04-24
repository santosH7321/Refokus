import Product from "./Product";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsa provident porro reiciendis minima quaerat delectus saepe nisi quam ipsam!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsa provident porro reiciendis minima quaerat delectus saepe nisi quam ipsam!",
      live: true,
      case: false,
    },
    {
      title: "YIR2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsa provident porro reiciendis minima quaerat delectus saepe nisi quam ipsam!",
      live: true,
      case: false,
    },
    {
      title: "YIR2022",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ipsa provident porro reiciendis minima quaerat delectus saepe nisi quam ipsam!",
      live: true,
      case: true,
    },
  ];
  return (
    <div>
      {products.map((val, index) => (
        <Product key={index} val={val}/>
      ))}
    </div>
  );
};

export default Products;
