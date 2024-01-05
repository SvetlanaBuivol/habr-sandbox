const formatNumber = number => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1).replace('.0', '');
    return `${formattedNumber}K`;
  } else {
    return number.toString();
  }
};

export default formatNumber;
