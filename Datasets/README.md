# Smart Farming Assistant

Welcome to the **Smart Farming Assistant** project! This innovative solution leverages advanced technologies such as machine learning and deep learning to assist farmers in making data-driven decisions to optimize crop selection, disease management, and farming practices.

## Datasets
To implement the **Smart Crop Recommendation System** and **Plant Disease Identification** features, we provide three essential datasets:

### 1. **Crop Recommendation Dataset**
This dataset is used to train the crop recommendation model that suggests optimal crops based on environmental and soil factors. The dataset includes features such as nitrogen, phosphorous, potassium levels, temperature, humidity, pH, and rainfall, along with the type of crop that best fits these conditions.

- **Dataset Details:**
  - **Size:** 2200 rows
  - **Features:** Nitrogen, Phosphorous, Potassium, Temperature, Humidity, pH, Rainfall
  - **Label:** Crop type (target variable)

### 2. **Plant Disease Identification Dataset**
This dataset is used for training the deep learning model based on Convolutional Neural Networks (CNNs) to identify plant diseases from leaf images. The dataset contains images for 38 different plant diseases across 14 crops.

- **Dataset Details:**
  - **Training Set:** 70,295 images
  - **Validation Set:** 17,572 images
  - **Crops Included:** Apple, Blueberry, Cherry (including sour), Corn, Grape, Orange, Peach, Pepper (bell), Potato, Raspberry, Soybean, Squash, Strawberry, Tomato
  - **Diseases Included:** 38 unique plant diseases (e.g., Apple Scab, Tomato Blight, Powdery Mildew)
 
- Download Link:
  - [Plant Disease Image Dataset](https://www.kaggle.com/code/vad13irt/plant-disease-classification)
 
### 3. **Fertilizer Recommendation Dataset**
This dataset helps in providing personalized fertilizer recommendations based on soil quality and crop requirements. The dataset contains information about various types of fertilizers and their optimal usage based on soil nutrient levels and crop requirements.

- **Dataset Details:**
  - **Features:** Soil nutrients, crop requirements
  - **Purpose:** Generate tailored fertilizer recommendations to optimize growth and yield

## How to Use the Datasets
1. **Crop Recommendation:** Use the crop recommendation dataset with machine learning models like Random Forest, Decision Trees, and SVM to predict the most suitable crop for your specific soil and environmental conditions.
2. **Plant Disease Identification:** Utilize the plant disease dataset with CNNs to analyze leaf images and detect specific diseases.
3. **Fertilizer Recommendation:** Leverage the fertilizer recommendation dataset to determine the best fertilizers based on the soil and crop data.

