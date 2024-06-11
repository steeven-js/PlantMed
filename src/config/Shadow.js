const Shadow = (
  elevation,
  shadowColor,
  shadowOffsetWidth,
  shadowOffsetHeight,
  shadowOpacity,
) => {
  return {
    elevation: elevation,
    shadowColor: shadowColor,
    shadowOffset: {
      width: shadowOffsetWidth,
      height: shadowOffsetHeight,
    },
    shadowOpacity: shadowOpacity,
    shadowRadius: 1 * elevation,
  };
};

// Exporting
export default Shadow;
