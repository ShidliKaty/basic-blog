const FormGroup = ({ children, errorMessage }) => {
  return (
    <div className={errorMessage != null ? "form-group error" : "form-group"}>
      {children}
      {errorMessage != null && (
        <div className='error-message'>{errorMessage}</div>
      )}
    </div>
  );
};

export default FormGroup;
