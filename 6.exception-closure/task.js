function parseCount(value) {
  const parseNum = Number.parseFloat(value);
    if (isNaN(parseNum)){
        throw new Error("Невалидное значение");;
    }
 return parseNum;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}