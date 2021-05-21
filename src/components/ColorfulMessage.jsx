export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const style = {
    color,
  };
  return <p style={style}>{children}</p>;
};
