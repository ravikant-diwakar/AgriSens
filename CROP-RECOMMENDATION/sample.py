import streamlit as st
import numpy as np
import pickle
import os

## Load the trained model
RF_Model_pkl = pickle.load(open('RF.pkl', 'rb'))

## Function to make predictions using the trained model
def predict_crop(inputs):
    # # Making predictions using the model
    prediction = RF_Model_pkl.predict(inputs)
    return prediction

## Function to load and display an image of the predicted crop
def show_crop_image(crop_name):
    # # Assuming we have a directory named 'crop_images' with images named as 'crop_name.jpg'
    image_path = os.path.join('crop_images', crop_name.lower() + '.jpg')
    if os.path.exists(image_path):
        st.image(image_path, use_column_width=True)
    else:
        st.error("Image not found for the predicted crop.")

## Streamlit code for the web app interface
def main():
    # # Set a background image
    st.markdown(
        """
        <style>
        .stApp {
            background-image: url("https://example.com/background.jpg");
            background-size: cover;
        }
        </style>
        """,
        unsafe_allow_html=True
    )
    
    # # Rest of the app code...
    # # ...

## Running the main function
if __name__ == '__main__':
    main()


import streamlit as st
import numpy as np
import pickle

## Load the trained model
RF_Model_pkl = pickle.load(open('RF.pkl', 'rb'))

## Function to make predictions using the trained model
def predict_crop(inputs):
    # # Making predictions using the model
    prediction = RF_Model_pkl.predict(inputs)
    return prediction

## Streamlit code for the web app interface
def main():
    # # Setting the title of the web app
    st.title("Crop Recommendation Web App")
    
    # # Input fields for the user to enter the environmental factors
    st.sidebar.header("Enter Crop Details")
    nitrogen = st.sidebar.number_input("Nitrogen", min_value=0.0, max_value=140.0, value=0.0, step=0.1)
    phosphorus = st.sidebar.number_input("Phosphorus", min_value=0.0, max_value=145.0, value=0.0, step=0.1)
    potassium = st.sidebar.number_input("Potassium", min_value=0.0, max_value=205.0, value=0.0, step=0.1)
    temperature = st.sidebar.number_input("Temperature (°C)", min_value=0.0, max_value=50.0, value=0.0, step=0.1)
    humidity = st.sidebar.number_input("Humidity (%)", min_value=0.0, max_value=100.0, value=0.0, step=0.1)
    ph = st.sidebar.number_input("pH Level", min_value=0.0, max_value=14.0, value=0.0, step=0.1)
    rainfall = st.sidebar.number_input("Rainfall (mm)", min_value=0.0, max_value=300.0, value=0.0, step=0.1)
    
    # # Validate inputs and make prediction
    inputs = np.array([[nitrogen, phosphorus, potassium, temperature, humidity, ph, rainfall]])
    if st.sidebar.button("Predict"):
        if not inputs.any() or np.isnan(inputs).any() or (inputs == 0).all():
            st.error("Please fill in all input fields with valid values before predicting.")
        else:
            prediction = predict_crop(inputs)
            st.success(f"The recommended crop is: {prediction[0]}")

## Running the main function
if __name__ == '__main__':
    main()
