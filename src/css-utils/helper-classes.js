/**
 * Given an array of CSS properties, output css properties
 * with each property equal to `value`
 */
export const cssPropertiesToCss = (cssProperties, value) => {
  return cssProperties.reduce((css, cssProp) => {
    return css + `${cssProp}:${value};`;
  }, ``);
};

/**
 * Given a helperClass (string) and array of cssProperties,
 * will generate a css class named helperClass that has
 * all cssProperties mapped to value.
 */
export const helperClassToCss = (helperClass, cssProperties, value) => {
  const cssProps = cssPropertiesToCss(cssProperties, value);
  return `.${helperClass}{${cssProps}}`;
};

/**
 * Given an array of helperClasses that map to cssProperties,
 * output a string of CSS that maps the helperClass (with variant modifier)
 * to the array of css properties with each css property equal to
 * value
 *
 * e.g.
 * helperClasses = [["text", ["color"]]],
 * variant = "primary",
 * value = "#000"
 *
 * Will output the following:
 * .text-primary {
 *    color: #000;
 * }
 */
export const helperClassesToCss = (helperClasses, variant, value) => {
  return helperClasses.reduce((css, [helperClass, cssProperties]) => {
    return (
      css + helperClassToCss(`${helperClass}-${variant}`, cssProperties, value)
    );
  }, ``);
};
