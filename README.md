# AgriSens : SMART CROP RECOMMENDATION SYSTEM WITH PLANT DISEASE IDENTIFICATION

## Introduction

This project aims to revolutionize agriculture by integrating machine learning technology to provide smart crop recommendations and assist in plant disease identification. By leveraging data analytics and deep learning techniques, farmers can make informed decisions for optimal crop selection and management.

## Features

1. Smart Crop Recommendation: Utilizes machine learning algorithms to recommend suitable crops based on factors like soil nutrients, climate conditions, and historical data.
2. Plant Disease Identification: Employs convolutional neural networks (CNNs) to detect and classify plant diseases accurately from uploaded images, enabling timely interventions.
3. User-Friendly Interface: Offers an intuitive interface for farmers to input relevant data and receive personalized crop recommendations and disease diagnosis.

## Data

1. Crop Recommendation Model :
   
This dataset consists of 2200 rows in total.
Each row has 8 columns representing Nitrogen, Phosphorous, Potassium, Temperature, Humidity, PH, Rainfall and Label
NPK(Nitrogen, Phosphorous and Potassium) values represent the NPK values in the soil. Temperature, humidity and rainfall are the average values of the sorroundings environment respectively. PH is the PH value present in the soil. The Label column tells us the type of crop that's best suited to grow based on these conditions.
Label is the value we will be predicting
2. Plant Disease Identification Model :

The Plant Disease Image Dataset utilized for crop disease identification comprises a secondary dataset featuring 70,295 plant snapshots exhibiting a spectrum of illnesses. Standardized to a resolution of 128x128 pixels, this dataset occupies a storage space of five gigabytes. Within this dataset, there are 38 distinct classes, encompassing 14 different plant types and 26 identifiable illnesses. Serving as the primary training data for all machine learning algorithms referenced in the study, the dataset's algorithm exhibiting the highest accuracy was chosen for further evaluation and application. Data preprocessing techniques, including normalization, feature scaling, and handling of missing values, were applied to ensure data consistency and cleanliness.

