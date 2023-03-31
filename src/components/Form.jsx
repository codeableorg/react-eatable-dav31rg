import React from 'react';
import styled from '@emotion/styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const StyledLable = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 1.1em;
  color: #B8B8BB;
  margin-top: 1em;
  margin-bottom: 2.1em;
`;
const StyledButton = styled.button`
  margin-top: 20em;
  margin-bottom: 0.8em;
  width: 19.4em;
  height: 4.4em;
  border-radius: 1.9em;
  border: none;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.4em;
  color: #FFFFFF;
  background-color: #FA4A0C;
  cursor: pointer;
`;
const fieldStyle = {
  width: "21.9em",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "1px solid #333333",
  background: "#F6F6F9",
};

const DishForm = ({ buttonName }) => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          dishName: '',
          dishPrice: '',
          dishDescription: '',
          dishCategory: '',
          dishUrl: '',
        }}
        validate={(value) => {
          let faults = {};
          
          if (!value.dishName) {
            faults.dishName = "Title is mandatory";
          }
          if (!value.dishPrice) {
            faults.dishPrice = "Price is mandatory";
          }
          if (!value.dishDescription) {
            faults.dishDescription = "Description is mandatory";
          }
          if (!value.dishCategory) {
            faults.dishCategory = "Category is mandatory";
          }
          if (!value.dishUrl) {
            faults.dishUrl = "Picture is mandatory";
          }
          
          return faults;
        }}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
          navigate('/');
        }}
      >
        {({ errors, isValid }) => (
          <Form>
            <div>
              <StyledLable htmlFor="name">Name</StyledLable>
              <Field 
                type="text"
                id="name"
                name="dishName"
                style={fieldStyle}
              />
              <ErrorMessage name='dishName' component={() => (
                  <p>{errors.dishName}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="price">Price</StyledLable>
              <Field 
                type="text"
                id="price"
                name="dishPrice"
                style={fieldStyle}
              />
              <ErrorMessage name='dishPrice' component={() => (
                  <p>{errors.dishPrice}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="description">Description</StyledLable>
              <Field 
                id="description"
                name="dishDescription"
                as="textarea"
                style={fieldStyle}
              />
              <ErrorMessage name='dishDescription' component={() => (
                  <p>{errors.dishDescription}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="category">Category</StyledLable>
              <Field 
                type="text"
                id="category"
                name="dishCategory"
                style={fieldStyle}
              />
              <ErrorMessage name='dishCategory' component={() => (
                  <p>{errors.dishCategory}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="url">Picture URL</StyledLable>
              <Field 
                type="text"
                id="url"
                name="dishUrl"
                style={fieldStyle}
              />
              <ErrorMessage name='dishUrl' component={() => (
                  <p>{errors.dishUrl}</p>
                )}/>
            </div>
            <StyledButton disabled={!isValid} type="submit">{buttonName}</StyledButton>
          </Form>
        )}  
      </Formik>
    </>
  );
}

export default DishForm