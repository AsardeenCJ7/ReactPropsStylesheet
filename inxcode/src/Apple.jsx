import Car from "./Car";

function Apple() {
  const brand = "Ferrari";
  return (
    <>
      <div>Apple {brand}</div>
      <Car brand={brand} company="Ford" />
    </>
  );
}

export default Apple;
