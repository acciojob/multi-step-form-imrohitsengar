import React from "react";

function Step({
  step,
  formData = {},
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <div className="step-card">
      {step === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2>Customer Details</h2>
          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            name="firstName"
            type="text"
            value={formData.first_name || ""}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            name="lastName"
            type="text"
            value={formData.last_name || ""}
            onChange={handleChange}
          />

          <div className="button-group">
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2>Car Details</h2>
          <label htmlFor="model">Model</label>
          <input
            id="model"
            name="model"
            type="text"
            value={formData.model || ""}
            onChange={handleChange}
          />

          <label htmlFor="car_price">Price</label>
          <input
            id="car_price"
            name="car_price"
            type="text"
            value={formData.car_price || ""}
            onChange={handleChange}
          />

          <div className="button-group">
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2>Payment Details</h2>
          <label htmlFor="card_info">Credit Card Number</label>
          <input
            id="card_info"
            name="card_info"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={formData.card_info || ""}
            onChange={handleChange}
          />

          <label htmlFor="expiry_date">Expiry Date</label>
          <input
            id="expiry_date"
            name="expiry_date"
            type="text"
            placeholder="MM/YY"
            value={formData.expiry_date || ""}
            onChange={handleChange}
          />

          <div className="button-group">
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Step;
