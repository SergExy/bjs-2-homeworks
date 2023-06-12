function parseCount(v) {
    if (isNaN(Number.parseFloat(v))){
        throw new Error("Невалидное значение");;
    }
 return Number.parseFloat(v);
}

function validateCount(vv) {
  try {
    return parseCount(vv);
  } catch (error) {
    return error;
  }
}