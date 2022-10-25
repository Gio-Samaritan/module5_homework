/*Задание 8 */
let car = new Map([
    ["solaris", "white"],
    ["elantra", "blue"],
    ["sonata", "black"]
  ]);
  for(let model of car.keys()){
    console.log(model);
  };
  for(let color of car.values()){
    console.log(color)
  };
  car.forEach((value, key) => {
      console.log(`${key} - x = ${value} - y`);
  });