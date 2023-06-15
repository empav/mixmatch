import React from 'react';

const useForm = () => {
  const formRef = React.useRef(false);
  const [inputs, setInputs] = React.useState({});
  const [errors] = React.useState({});

  const handleChange = React.useCallback(
    (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  const validateForm = () => true;

  const handleSubmit = React.useCallback(
    (cb) => (e) => {
      e.preventDefault();

      validateForm() && cb(e);

      cb(e);
    },
    []
  );

  const getInput = React.useCallback(
    (inputName) => {
      return inputs[inputName] || '';
    },
    [inputs]
  );

  return [getInput, errors, handleSubmit, handleChange, formRef];
};

export default useForm;
