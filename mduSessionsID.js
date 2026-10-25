function validateCheckSum(idNumber) {
  let sum = 0;
  let doubleUp = false;

  for (let i = idNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(idNumber.charAt(i), 10);

    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleUp = !doubleUp;
  }

  return sum % 10 === 0;
}

function isValidDate(y, m, d) {
  let date = new Date(`${y}-${m}-${d}`);
  return (
    date.getFullYear() === parseInt(y, 10) &&
    date.getMonth() + 1 === parseInt(m, 10) &&
    date.getDate() === parseInt(d, 10)
  );
}

function decodeIDNumber(idNumber) {
  if (idNumber.length !== 13) {
    return "Invalid length";
  }
  if (!/^\d+$/.test(idNumber)) {
    return "Invalid characters";
  }

  let birthDate = idNumber.substring(0, 6);
  let genderCode = parseInt(idNumber.substring(6, 10), 10);
  let citizenshipCode = parseInt(idNumber.charAt(10), 10);

  let year = parseInt(birthDate.substring(0, 2), 10);
  let month = birthDate.substring(2, 4);
  let day = birthDate.substring(4, 6);

  let currentYear = new Date().getFullYear() % 100;
  year += year <= currentYear ? 2000 : 1900;

  if (!isValidDate(year, month, day)) {
    return "Invalid date of birth";
  }

  let sex = genderCode >= 5000 ? "Male" : "Female";

  let citizenship =
    citizenshipCode === 0
      ? "Citizen"
      : citizenshipCode === 1
        ? "PermanentResident"
        : "Invalid citizenship status";

  if (citizenship === "Invalid citizenship status") {
    return citizenship;
  }

  if (!validateCheckSum(idNumber)) {
    return "Invalid checksum";
  }

  return `${year}-${month}-${day}, ${sex}, ${citizenship}`;
}

console.log(decodeIDNumber("9901105110084"));

function isCheckSumDigitValid(idNum) {
  let tempTotal = 0;
  let checkSum = 0;
  let multiplier = 1;
  for (let i = 0; i < 13; i++) {
    tempTotal = parseInt(idNum.toString().charAt(i)) * multiplier;
    if (tempTotal > 9) {
      tempTotal =
        parseInt(tempTotal.toString().charAt(0)) +
        parseInt(tempTotal.toString().charAt(1));
    }
    checkSum = checkSum + tempTotal;
    multiplier = multiplier % 2 === 0 ? 1 : 2;
  }
  if (checkSum % 10 != 0) {
    return false;
  }
  return true;
}
