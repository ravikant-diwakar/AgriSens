# AgriSens : SMART CROP RECOMMENDATION SYSTEM WITH PLANT DISEASE IDENTIFICATION

![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/e6a4a6be-7c42-4155-ab16-6585ebb026f5)

## Introduction

This project aims to revolutionize agriculture by integrating machine learning technology to provide smart crop recommendations and assist in plant disease identification. By leveraging data analytics and deep learning techniques, farmers can make informed decisions for optimal crop selection and management.

## Features

- **Smart Crop Recommendation :** Utilizes machine learning algorithms to recommend suitable crops based on factors like soil nutrients, climate conditions, and historical data.
- **Plant Disease Identification :** Employs convolutional neural networks (CNNs) to detect and classify plant diseases accurately from uploaded images, enabling timely interventions.
- **User-Friendly Interface :** Offers an intuitive interface for farmers to input relevant data and receive personalized crop recommendations and disease diagnosis.
- **Today's Weather Forecast :** Provides real-time weather insights on temperature, humidity, and more, enabling farmers to plan their farming activities with precision.
- **Explore Crop Planning :** Guides farmers in planning crop planting schedules for optimal productivity based on soil quality, weather, and other essential factors.

## Data

### Crop Recommendation Model :
This dataset consists of **2200 rows** in total.
**Each row has 8 columns representing Nitrogen, Phosphorous, Potassium, Temperature, Humidity, PH, Rainfall and Label**
NPK(Nitrogen, Phosphorous and Potassium) values represent the NPK values in the soil. Temperature, humidity and rainfall are the average values of the sorroundings environment respectively. PH is the PH value present in the soil. **The Label column tells us the type of crop that's best suited to grow based on these conditions.
Label is the value we will be predicting**

### Plant Disease Identification Model :
The Plant Disease Image Dataset utilized for crop disease identification comprises a secondary dataset featuring **70,295 plant snapshots** exhibiting a spectrum of illnesses. Standardized to a resolution of 128x128 pixels, this dataset occupies a storage space of five gigabytes. Within this dataset, there are **38 distinct classes**, encompassing 14 different plant types and **26 identifiable illnesses**. Serving as the primary training data for all machine learning algorithms referenced in the study, the dataset's algorithm exhibiting the highest accuracy was chosen for further evaluation and application. Data preprocessing techniques, including normalization, feature scaling, and handling of missing values, were applied to ensure data consistency and cleanliness.

## Model Architecture

### Crop Recommendation Model:
   
For the Crop Recommendation Model, seven classification algorithms were utilized to predict suitable crop recommendations. These algorithms include:

- Decision Tree
- Gaussian Naive Bayes
- Support Vector Machine (SVM)
- Logistic Regression
- Random Forest (achieved the best accuracy)
- XGBoost
- KNN
  
Each algorithm was trained on a dataset comprising various factors such as soil nutrients, climate conditions, and historical data to provide accurate crop recommendations to farmers.

### Plant Disease Identification Model:
   
For the Plant Disease Identification Model, a Convolutional Neural Network (CNN) architecture was employed. This CNN model was specifically trained for crop disease identification. Leveraging deep learning techniques, the CNN analyzes images of plant leaves to detect and classify diseases accurately. This model aids farmers in early disease detection and management, contributing to improved crop health and yield.

## Integration

These two models are integrated into the Smart Crop Recommendation System with Plant Disease Identification. This system provides farmers with comprehensive support, offering both crop recommendations based on various factors and precise identification of crop diseases through image analysis. By combining these models, the system enables farmers to make informed decisions, optimize crop selection, and effectively manage plant diseases for sustainable agriculture and enhanced productivity.

## Results

The results of the Smart Crop Recommendation System with Plant Disease Identification showcase the efficacy of the implemented models:

### Crop Recommendation Model:
- Seven classification algorithms were evaluated for crop recommendation tasks.
- The accuracy of each algorithm was assessed, with the Random Forest algorithm achieving the highest accuracy of 99.54%.
- Table 1 below illustrates the accuracy achieved by each algorithm:

**Table 1: Accuracy vs Algorithms**

| Algorithm            | Accuracy   |
|----------------------|------------|
| Decision Tree        | 90.0       |
| Gaussian Naive Bayes| 99.09      |
| Support Vector Machine (SVM) | 10.68 |
| Logistic Regression  | 95.23      |
| Random Forest        | 99.55      |
| XGBoost              | 99.09      |
| KNN                  | 97.5       |


![1](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/604bd0b3-5161-48e2-aef0-28267fd85aac)

### Plant Disease Identification Model:
- The Convolutional Neural Network (CNN) architecture was trained for crop disease identification.
- The CNN achieved significant accuracy in accurately detecting and classifying various plant diseases from leaf images.

| **Example of Diseased image** |
| ------------------------------|
| ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/2f230981-13b5-4010-a346-595c90fb6b32) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/4219025a-0319-4b72-847f-b063c06ced0c) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/2ece067b-5f8c-46d6-b05f-d1517aaf62a9) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/cdb08134-7177-4df9-841d-1f9d3f171085) |

![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/71e95ae9-05df-44dd-8192-133180981113)
![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/9a11536a-8480-41cd-8099-9c0cec2c2c62)


These results demonstrate the effectiveness of the Smart Crop Recommendation System with Plant Disease Identification in assisting farmers with informed crop selection and disease management, thereby contributing to improved agricultural practices and crop yields.
