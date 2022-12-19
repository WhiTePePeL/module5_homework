//задание 8
let town = new Map ([
    ["One", "Moskow"],
    [14,"Omsk"],
    ["light", "Tomsk"]
  ]); 
  town.forEach((value, key) => {
      console.log(` Ключ - ${key}, значение - ${value} .`);
  });
