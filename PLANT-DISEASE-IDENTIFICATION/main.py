import streamlit as st
import tensorflow as tf
import numpy as np
from PIL import Image

# Load model once and cache it
@st.cache_resource
def load_model():
    return tf.keras.models.load_model("trained_plant_disease_model.keras")

# Function to load and predict the image
def model_prediction(test_image):
    model = load_model()
    image = tf.keras.preprocessing.image.load_img(test_image, target_size=(128, 128))
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # Convert single image to batch
    predictions = model.predict(input_arr)
    return np.argmax(predictions)  # Return index of max element

# Banner Image
img = Image.open("Diseases.png")
st.image(img, use_column_width=True)

# App Modes
app_mode = st.selectbox("Select a Page", ["HOME", "DISEASE RECOGNITION"])

# Home Page
if app_mode == "HOME":
    # Title
    st.markdown(
        """
        <h1 style='text-align: center; color: #4CAF50;'>AgriSens: Smart Disease Detection</h1>
        <p style='text-align: center; font-size: 18px;'>
        Empowering Farmers with AI-Powered Plant Disease Recognition.<br>
        Upload plant images to detect diseases accurately and access actionable insights.
        </p>
        """,
        unsafe_allow_html=True,
    )
    
    # Features Section
    st.markdown("### Features")
    col1, col2, col3 = st.columns([1, 1, 1])
    with col1:
        st.image("image1.png", caption="Disease Detection", use_column_width=True)
        st.write("Identify plant diseases with AI.")
    with col2:
        st.image("image3.1.png", caption="Actionable Insights", use_column_width=True)
        st.write("Get disease details and remedies.")
    with col3:
        st.image("image2.1.png", caption="Real-Time Results", use_column_width=True)
        st.write("Receive instant predictions.")

    # Instructions Section
    st.markdown("### How It Works")
    st.write(
        """
        1. Navigate to the "Disease Recognition" page.
        2. Upload an image of the affected plant.
        3. Get instant results along with disease information.
        """
    )
    
    #footer
    st.markdown(
    """
    <div style="text-align: center; margin-top: 50px; font-size: 14px; color: #666;">
        Developed by <b><a href="https://agrisens.netlify.app/" target="_blank" style="color: #666; text-decoration: none;">Team AgriSens</a></b> | Powered by Streamlit
    </div>
    """,
    unsafe_allow_html=True,
)


# Disease Recognition Page
elif app_mode == "DISEASE RECOGNITION":
    st.markdown(
        """
        <h2 style='text-align: center; color: #4CAF50;'>Disease Recognition</h2>
        """,
        unsafe_allow_html=True,
    )

    test_image = st.file_uploader("Choose an Image of the Plant:")
    if test_image:
        st.image(test_image, use_column_width=True)

        if st.button("Predict"):
            st.snow()
            st.write("Analyzing the image...")
            result_index = model_prediction(test_image)
            
            # Reading Labels
            class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
                           'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 
                           'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 
                           'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 
                           'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
                           'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot',
                           'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 
                           'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 
                           'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 
                           'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 
                           'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 
                           'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 
                           'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
                           'Tomato___healthy']
            
            # Simulated Disease Information
            disease_info = {
    'Apple___Apple_scab': 'A fungal disease caused by *Venturia inaequalis*, leading to dark, scabby lesions on leaves and fruit, affecting fruit quality and yield.',
    'Apple___Black_rot': 'Caused by the fungus *Botryosphaeria obtusa*, it results in black, rotten spots on apples and can also infect leaves and bark.',
    'Apple___Cedar_apple_rust': 'A fungal disease caused by *Gymnosporangium juniperi-virginianae*, leading to yellow-orange spots on apple leaves and fruit, requiring both apple and cedar hosts to complete its life cycle.',
    'Apple___healthy': 'No diseases detected; the apple plant appears healthy.',
    'Blueberry___healthy': 'No diseases detected; the blueberry plant appears healthy.',
    'Cherry_(including_sour)___Powdery_mildew': 'A fungal disease caused by *Podosphaera clandestina*, leading to white, powdery fungal growth on leaves, shoots, and fruit, affecting fruit development.',
    'Cherry_(including_sour)___healthy': 'No diseases detected; the cherry plant appears healthy.',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': 'Caused by the fungus *Cercospora zeae-maydis*, leading to rectangular gray lesions on maize leaves, reducing photosynthetic area and yield.',
    'Corn_(maize)___Common_rust_': 'A fungal disease caused by *Puccinia sorghi*, resulting in reddish-brown pustules on both leaf surfaces, potentially reducing yield if severe.',
    'Corn_(maize)___Northern_Leaf_Blight': 'Caused by the fungus *Setosphaeria turcica*, leading to cigar-shaped gray-green lesions on leaves, which can coalesce and cause significant yield loss.',
    'Corn_(maize)___healthy': 'No diseases detected; the corn plant appears healthy.',
    'Grape___Black_rot': 'A fungal disease caused by *Guignardia bidwellii*, leading to black spots on leaves and fruit, causing fruit to shrivel and turn into mummies.',
    'Grape___Esca_(Black_Measles)': 'A complex disease involving multiple fungi, leading to dark streaks on the wood and black spots on leaves and berries, potentially causing vine decline.',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': 'Caused by the fungus *Pseudocercospora vitis*, leading to irregular, necrotic spots on leaves, which can merge and cause significant leaf area loss.',
    'Grape___healthy': 'No diseases detected; the grapevine appears healthy.',
    'Orange___Haunglongbing_(Citrus_greening)': 'A bacterial disease caused by *Candidatus Liberibacter* species, leading to yellowing of shoots, asymmetrical fruit, and eventual tree death.',
    'Peach___Bacterial_spot': 'Caused by the bacterium *Xanthomonas campestris pv. pruni*, leading to small, water-soaked spots on leaves and fruit, which can coalesce and cause significant damage.',
    'Peach___healthy': 'No diseases detected; the peach tree appears healthy.',
    'Pepper,_bell___Bacterial_spot': 'Caused by the bacterium *Xanthomonas campestris pv. vesicatoria*, leading to dark, water-soaked spots on leaves and fruit, reducing yield and marketability.',
    'Pepper,_bell___healthy': 'No diseases detected; the bell pepper plant appears healthy.',
    'Potato___Early_blight': 'A fungal disease caused by *Alternaria solani*, leading to concentric ring lesions on leaves and tubers, reducing yield and tuber quality.',
    'Potato___Late_blight': 'Caused by the oomycete *Phytophthora infestans*, leading to water-soaked lesions on leaves and tubers, which can rapidly expand and cause total crop loss.',
    'Potato___healthy': 'No diseases detected; the potato plant appears healthy.',
    'Raspberry___healthy': 'No diseases detected; the raspberry plant appears healthy.',
    'Soybean___healthy': 'No diseases detected; the soybean plant appears healthy.',
    'Squash___Powdery_mildew': 'A fungal disease caused by *Podosphaera xanthii* or *Erysiphe cichoracearum*, leading to white, powdery fungal growth on leaves and stems, reducing photosynthesis and yield.',
    'Strawberry___Leaf_scorch': 'Caused by the fungus *Diplocarpon earlianum*, leading to irregular, dark purple spots on leaves, which can coalesce and cause leaf death.',
    'Strawberry___healthy': 'No diseases detected; the strawberry plant appears healthy.',
    'Tomato___Bacterial_spot': 'Caused by the bacterium *Xanthomonas campestris pv. vesicatoria*, leading to small, water-soaked spots on leaves and fruit, reducing yield and fruit quality.',
    'Tomato___Early_blight': 'A fungal disease caused by *Alternaria solani*, leading to concentric ring lesions on leaves, stems, and fruit, causing defoliation and yield loss.',
    'Tomato___Late_blight': 'Caused by the oomycete *Phytophthora infestans*, leading to large, water-soaked lesions on leaves and fruit, causing rapid plant decline and fruit rot.',
    'Tomato___Leaf_Mold': 'A fungal disease caused by *Passalora fulva*, leading to yellow spots on upper leaf surfaces and olive-green to gray mold on the undersides, causing defoliation.',
    'Tomato___Septoria_leaf_spot': 'Caused by the fungus *Septoria lycopersici*, leading to small, circular spots with gray centers and dark borders on leaves, causing premature defoliation.',
    'Tomato___Spider_mites Two-spotted_spider_mite': 'Infestation by *Tetranychus urticae*, leading to stippling and bronzing of leaves, which can cause defoliation and reduced yield.',
    'Tomato___Target_Spot': 'Caused by the fungus *Corynespora cassiicola*, leading to dark, concentric lesions on leaves, stems, and fruit, causing defoliation and fruit rot.',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus': 'A viral disease transmitted by whiteflies, leading to yellowing and curling of leaves, stunted growth, and reduced yield.',
    'Tomato___Tomato_mosaic_virus': 'A viral disease causing mottling, yellowing, and distortion of leaves, leading to reduced fruit size and yield.',
    'Tomato___healthy': 'No diseases detected; the tomato plant appears healthy.'
}
            
            predicted_class = class_names[result_index]
            st.success(f"Model predicts this as **{predicted_class}**.")
            
            # Display disease details
            with st.expander(f"About {predicted_class}"):
                if predicted_class in disease_info:
                    st.markdown(f"**Description:** {disease_info[predicted_class]}")
                    st.markdown(
                        f"[Learn more about {predicted_class}](https://example.com/{predicted_class.replace(' ', '_')})"
                    )
                else:
                    st.warning("No additional information is available for this prediction.")
