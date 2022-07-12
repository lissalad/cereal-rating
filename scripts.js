const data = require("./cereal.json");

const getBottomFive = (data) => {
  // console.log(topCereals);
  const cereals = data.sort((a, b) => {return a.rating-b.rating});
  const bottomCereals = cereals.map(cereal => cereal.name);

  return cereals.slice(0,5);
}

console.log(getBottomFive(data));