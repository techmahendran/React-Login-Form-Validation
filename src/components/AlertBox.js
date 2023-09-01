const AlertBox = ({ isActive, successBtn }) => {
  return (
    <>
      <div className={`${isActive ? "success-msg active" : "success-msg"}`}>
        <i className="fa fa-check"></i>
        <h1>Thanks</h1>
        <p>Your Login is Success And Password Is Match</p>
        <button className="succes_btn" onClick={successBtn}>
          Success
        </button>
      </div>
    </>
  );
};

export default AlertBox;
