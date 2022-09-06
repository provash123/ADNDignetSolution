var romanToInt = function (s) {
  const maps = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let roman_list = s.split("");

  console.log("roman_list", roman_list);

  let eng_obj = {};

  roman_list.map((r, i) => {
    return (eng_obj[i] = maps[r]);
  });

  let integer_value = 0;
  let skip = "";

  for (const key in eng_obj) {
    let next = (Number(key) + 1).toString();

    if (eng_obj[next] > eng_obj[key]) {
      skip = next;
      integer_value += eng_obj[next] - eng_obj[key];
    } else {
      if (key !== skip) {
        integer_value = integer_value + eng_obj[key];
      }
    }
  }

  return integer_value;
};

const result = romanToInt("IX");
console.log(result);
