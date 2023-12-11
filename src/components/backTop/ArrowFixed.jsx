const ArrowFixed = () => {
  return (
    <div className="arrow-fixed">
      <span className="arrow-scroll" onClick={() => window.scrollTo(0, 0)}>
        &#8678;
      </span>
    </div>
  );
};

export default ArrowFixed;
