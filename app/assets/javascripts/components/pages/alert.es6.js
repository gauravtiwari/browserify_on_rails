import React from 'react';
import SweetAlert from 'react-swal';

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <SweetAlert isOpen={true}
                  type="warning"
                  confirmButtonText="Yup"
                  cancelButtonText="Nope" />
    );
  }
}

module.exports = AlertComponent;
