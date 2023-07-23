const axios = require("axios");
// const { json } = require("express");

const fun = async () => {
  return new Promise((resolve,reject) => {
    axios.get(
      "https://drive.google.com/uc?export=download&id=1TSgLlDvFA6W0NyYuaDWSUDrXL2Kpa_RH"
    ).then((res) => {
      console.log(res.data)
      // resolve(res.json());
    }).catch((err)=>reject(err));
  });

};

const fun2 = async () => {
  const j = await fun();

  // console.log(j);
;
};

fun2();
