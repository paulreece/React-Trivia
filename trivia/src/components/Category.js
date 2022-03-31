const Category = ({ id, name, category }) => {
  return (
    <>
      <div key={id}>{name}</div>
    </>
  );
};

export { Category };
