<div align="center">
    <h1>AgriSens : AI-POWERED SMART FARMING ASSISTANT</h1>
</div>

<div align="center">
    <h3>Link : https://agrisens.netlify.app/ </h3>
</div>

![Screenshot 2025-01-22 210034](https://github.com/user-attachments/assets/5b945e7d-bbb0-4463-b06f-681445e102bd)


## Overview

Smart Farming Assistant is an innovative solution that uses advanced technology to help farmers improve productivity and make better decisions. The platform features a Smart Crop Recommendation system powered by machine learning to suggest optimal crops based on soil nutrients, climate, and historical data. It also includes a Plant Disease Identification tool using convolutional neural networks (CNNs) to accurately diagnose plant diseases from uploaded images, enabling timely intervention. Additional features such as real-time Weather Forecasts, tailored Fertilizer Recommendations based on soil quality and crop requirements, and a Smart Farming Guide for crop management further enhance its value. With a user-friendly web app, farmers can easily access these insights and tools to improve farming practices.

## Research Paper

> This project is based on the research paper published on IEEE. You can find the paper at the following link:

- [IEEE : Smart Crop Recommendation System with Plant Disease Identification](https://ieeexplore.ieee.org/document/10738975)

- You can view the research paper directly here : [View Paper](https://github.com/ravikant-diwakar/AgriSens/blob/master/IEEE_Paper_Smart_Crop_Recommendation_System_with_Plant_Disease_Identification.pdf)


## Features

- [x] **Smart Crop Recommendation**: Leverages machine learning to suggest the most suitable crops based on soil nutrients, climate, and historical data.
- [x] **Plant Disease Identification**: Uses convolutional neural networks (CNNs) to accurately detect and classify plant diseases from uploaded images, allowing for timely interventions.
- [x] **Fertilizer Recommendation**: Offers customized fertilizer recommendations based on soil quality and crop needs to optimize growth and yield.
- [x] **Today's Weather Forecast**: Delivers real-time weather updates, including temperature and humidity, to help farmers plan their activities effectively.
- [x] **Smart Farming Guide**: Provides guidance on crop planting schedules and management strategies to maximize productivity based on soil and weather conditions.
- [x] **User-Friendly Interface**: Features an intuitive platform for farmers to easily input data and receive personalized crop, disease, and fertilizer recommendations.


## Datasets

The **Smart Farming Assistant** project provides three key datasets: the **Crop Recommendation Dataset** (2200 rows) includes soil and environmental factors such as nitrogen, phosphorous, temperature, humidity, and pH to predict the most suitable crops; the **Plant Disease Identification Dataset** contains 70,295 training and 17,572 validation images covering 38 diseases across 14 crops like Apple, Tomato, and Grape, used to train CNN models for disease detection; and the **Fertilizer Recommendation Dataset** offers data on soil quality and crop needs to provide tailored fertilizer suggestions. These datasets can be accessed via the following links: [Crop Recommendation Dataset](https://github.com/ravikant-diwakar/AgriSens/blob/master/Datasets/Crop_recommendation.csv), [Plant Disease Dataset](https://github.com/ravikant-diwakar/AgriSens/tree/master/Datasets), and [Fertilizer Recommendation Dataset](https://github.com/ravikant-diwakar/AgriSens/blob/master/Datasets/Fertilizer_recommendation.csv).

# 📌 Crop Recommendation Model

The **Crop Recommendation Model** utilizes machine learning algorithms to suggest the most suitable crops for farmers based on environmental and soil factors. By analyzing data such as soil nutrients, temperature, humidity, pH, and rainfall, the model provides tailored crop recommendations to ensure optimal growth and productivity. The model uses seven classification algorithms, with **Random Forest** achieving the highest accuracy of 99.55%. This helps farmers make informed decisions on crop selection, ensuring better yields and efficient farming practices.

## Dataset

This dataset consists of **2200 rows** in total.
**Each row has 8 columns representing Nitrogen, Phosphorous, Potassium, Temperature, Humidity, PH, Rainfall and Label**
NPK(Nitrogen, Phosphorous and Potassium) values represent the NPK values in the soil. Temperature, humidity and rainfall are the average values of the sorroundings environment respectively. PH is the PH value present in the soil. **The Label column tells us the type of crop that's best suited to grow based on these conditions.
Label is the value we will be predicting**


## Model Architecture
 
For the Crop Recommendation Model, seven classification algorithms were utilized to predict suitable crop recommendations. These algorithms include:

- Decision Tree
- Gaussian Naive Bayes
- Support Vector Machine (SVM)
- Logistic Regression
- Random Forest (achieved the best accuracy)
- XGBoost
- KNN
  
Each algorithm was trained on a dataset comprising various factors such as soil nutrients, climate conditions, and historical data to provide accurate crop recommendations to farmers.

## Integration

These two models are integrated into the Smart Crop Recommendation System with Plant Disease Identification. This system provides farmers with comprehensive support, offering both crop recommendations based on various factors and precise identification of crop diseases through image analysis. By combining these models, the system enables farmers to make informed decisions, optimize crop selection, and effectively manage plant diseases for sustainable agriculture and enhanced productivity.

## System Architecture


> For a visual overview of the architecture, refer to the diagram below:

<details>

<summary>💻 System Architecture</summary>

### System Architecture

![20250124_135249](https://github.com/user-attachments/assets/1c660b6b-5b70-440e-a453-bf802b490bdc)


</details>





## Results

- Seven classification algorithms were evaluated for crop recommendation tasks.
- The accuracy of each algorithm was assessed, with the Random Forest algorithm achieving the highest accuracy of 99.55%.
- Table 1 below illustrates the accuracy achieved by each algorithm:

> [!IMPORTANT]
> The Random Forest algorithm achieved the highest accuracy of 99.55% in crop recommendation, making it the most reliable model for this system.

**Table 1: Accuracy vs Algorithms**

| Algorithm            | Accuracy   |
| --- | :---: |
| Decision Tree        | 90.0       |
| Gaussian Naive Bayes| 99.09      |
| Support Vector Machine (SVM) | 10.68 |
| Logistic Regression  | 95.23      |
| Random Forest        | 99.55      |
| XGBoost              | 99.09      |
| KNN                  | 97.5       |



| Accuracy Comparison Graph of all models |
|---------------------------|
![1](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/604bd0b3-5161-48e2-aef0-28267fd85aac)

> The **Accuracy vs Crop Graphs** visualize the performance of different algorithms in crop recommendation accuracy.

| Accuracy vs Crop Graphs | Accuracy vs Crop Graphs |
| ----------- | -------------|
| ![4](https://github.com/user-attachments/assets/ef096a91-ee2f-470e-a134-9c0ba9c4862a) | ![6](https://github.com/user-attachments/assets/84ed33e7-f496-469e-b663-f20997936ced) |
![8](https://github.com/user-attachments/assets/a9230e96-b813-4213-90cc-6654f8cec69f) | ![10](https://github.com/user-attachments/assets/8455aa24-1856-43f9-ab0e-07adeda49dda) |
![12](https://github.com/user-attachments/assets/40d7bdeb-bc4f-40f5-97c3-110e229e30ca) | ![14](https://github.com/user-attachments/assets/639ba618-9930-467d-a462-354c5fd44a9c) |
![3](https://github.com/user-attachments/assets/69a9033f-cf39-45d3-93c9-57fb9ea8229d) | ![2](https://github.com/user-attachments/assets/70ffbe66-ca11-4b89-b2bf-16d1f71b5534) |


---

# 📌Plant Disease Identification Model 

The **Plant Disease Identification Model** utilizes Convolutional Neural Networks (CNN) to accurately identify plant diseases from leaf images. Trained on the **Plant Disease Image Dataset**, which includes 70,295 images in the training set and 17,572 images in the validation set, the model covers 38 different plant disease classes across 14 crops. It detects and classifies diseases such as **Apple Scab**, **Tomato Blight**, and **Powdery Mildew**, offering farmers a reliable tool for early disease detection. 

## Dataset

The **Plant Disease Image Dataset**, used for crop disease identification, consists of 70,295 plant images from the training set and 17,572 images from the validation set, covering a variety of 38 different plant disease classes. The images are standardized to a resolution of 128x128 pixels, and the dataset occupies approximately five gigabytes of storage space.


## Model Architecture
   
For the Plant Disease Identification Model, a Convolutional Neural Network (CNN) architecture was employed. This CNN model was specifically trained for crop disease identification. Leveraging deep learning techniques, the CNN analyzes images of plant leaves to detect and classify diseases accurately. This model aids farmers in early disease detection and management, contributing to improved crop health and yield.


### Key Features:
- **Crop Specific**: The model is designed to diagnose diseases for a specific set of crops.
- **Disease Diagnosis**: It can classify diseases based on images of leaves.
- **Accuracy**: The CNN model demonstrates high accuracy in identifying plant diseases, helping farmers and researchers detect issues early.

### Supported Crops and Diseases:
- The model works with a predefined list of 14 crops.
- For each crop, the model is trained to detect and classify up to 38 specific diseases.

> [!NOTE]
> Since model is trained for specific crops only so it can diagnose those specific crops only. The List of Crops For which this model will be helpful is:

```
[ 'Apple',
'Blueberry',
'Cherry_(including sour)',
'Corn_(maize)',
'Grape',
'Orange',
'Peach', 'Pepper, _bell',
'Potato',
'Raspberry',
'Soybean',
'Squash',
'Strawberry',
'Tomato' ]
```

> [!NOTE]
> The crop which can be used for diagnosis can only diagnose specific disease for which the model is trained. The List of crop diseases on Which Model is trained on is:

```
Found 17572 files belonging to 38 classes.
['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy', 'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)',
'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot',
'Pepper,_bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch',
'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite',
'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

```
### Crop Disease Guide

> Follow this link for detailed information on the Crop Disease Guide.

- [x] 📄 [Crop Disease Guide](DISEASE-GUIDE.md)

### How it Works:
- The model uses images of plant leaves to detect symptoms of various diseases.
- It applies CNN-based image classification to identify the correct disease for a given crop.



| **Example of Diseased image** |
| ------------------------------|
| ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/2f230981-13b5-4010-a346-595c90fb6b32) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/4219025a-0319-4b72-847f-b063c06ced0c) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/2ece067b-5f8c-46d6-b05f-d1517aaf62a9) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/cdb08134-7177-4df9-841d-1f9d3f171085) |

| Training and validation (accuracy and loss) CNN |
|---------------------------------------------|
| ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/71e95ae9-05df-44dd-8192-133180981113) ![image](https://github.com/ravikant-diwakar/AgriSens-SMART-CROP-RECOMMENDATION-SYSTEM-WITH-PLANT-DISEASE-IDENTIFICATION/assets/110620635/9a11536a-8480-41cd-8099-9c0cec2c2c62) |


These results demonstrate the effectiveness of the Smart Crop Recommendation System with Plant Disease Identification in assisting farmers with informed crop selection and disease management, thereby contributing to improved agricultural practices and crop yields.

> [!IMPORTANT]
> ### System Requirements
>  - Python: Version 3.8 or above
>  - TensorFlow/Keras: For disease identification
>  - Streamlit: For creating the web interface

> [!TIP]
> ### Common Issues and Tips
> - Ensure all dependencies in the `requirements.txt` are installed.
> - For TensorFlow-based disease detection, ensure you have a compatible GPU or CPU for faster processing.



## 👨‍💻 CONTRIBUTERS
- [Ravikant Diwakar](https://github.com/ravikant-diwakar)
- [Amit Kumar](https://github.com/AMITKUMAR7970)
- [Gaurav Kumar](https://github.com/Gauravkumar1741)
- Aditya Chaudhary

## 📷 Screenshots

| Home page | Features | 
| --------- | --------- |
| ![Screenshot 2025-03-22 104944](https://github.com/user-attachments/assets/7b3f6f1b-6423-4ee6-ab16-6391846635f5) | ![Screenshot 2025-03-22 105012](https://github.com/user-attachments/assets/58fe884b-2868-4d55-80d9-a3bdf519ece7) |

| Team Members | Contact Us |
| --------- | --------- |
| ![Screenshot 2025-03-22 105046](https://github.com/user-attachments/assets/1e15fa2b-afb1-4fa1-b743-a72af6dcd3c1) | ![Screenshot 2025-03-22 105141](https://github.com/user-attachments/assets/f3e6a7ca-9ebd-41c5-88c1-fd6e1f6528e9) |

| Crop Recommendation | Plant Disease Identification |
| --------- | --------- |
| ![Screenshot 2025-03-22 105516](https://github.com/user-attachments/assets/b1cedad0-48fc-44e6-8595-93e9795519f5) | ![Screenshot 2025-03-22 110018](https://github.com/user-attachments/assets/af7915e4-be3d-4741-bec6-4a2e49054b3a) | 

| Fertilizer Recommendation | Smart Farming Guide |
| --------- | --------- |
| ![Screenshot 2025-03-22 105639](https://github.com/user-attachments/assets/0d526603-15c5-443d-9f6c-cab83596cbe0) | ![Screenshot 2025-03-22 110057](https://github.com/user-attachments/assets/d454ef17-287c-4a0b-bee2-a5085d63a8bb) |

| 📲 | 📲 | 📲 | 📲 |
| -- | -- | -- | -- |
| ![Screenshot 2025-03-22 110147](https://github.com/user-attachments/assets/a83eb79b-0c67-4a77-ae20-936ea481a8d4) | ![Screenshot 2025-03-22 110403](https://github.com/user-attachments/assets/ff101e2d-c712-48da-b478-9c3793ace689) | ![Screenshot 2025-03-22 110637](https://github.com/user-attachments/assets/c188d7f7-93ec-42d7-a719-d81c7eec2b59) | ![Screenshot 2025-03-22 110738](https://github.com/user-attachments/assets/91298e33-94ef-4408-b8d8-9d00b3195074) |










## 📧 Contact

If you have any questions or feedback, feel free to reach out to us at [🔗Link](https://agrisens.netlify.app/form/).

---

















