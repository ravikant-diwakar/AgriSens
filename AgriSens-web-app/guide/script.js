document.addEventListener("DOMContentLoaded", function () {
  const cropData = [
    {
      name: "Apple",
      nitrogen: "20.80",
      phosphorus: "134.22",
      potassium: "199.89",
      temperature: "22.63",
      humidity: "92.33",
      pH: "5.93",
      rainfall: "112.65",
    },
    {
      name: "Banana",
      nitrogen: "100.23",
      phosphorus: "82.01",
      potassium: "50.05",
      temperature: "27.38",
      humidity: "80.36",
      pH: "5.98",
      rainfall: "104.63",
    },
    {
      name: "Blackgram",
      nitrogen: "40.02",
      phosphorus: "67.47",
      potassium: "19.24",
      temperature: "29.97",
      humidity: "65.12",
      pH: "7.13",
      rainfall: "67.88",
    },
    {
      name: "Chickpea",
      nitrogen: "40.09",
      phosphorus: "67.79",
      potassium: "79.92",
      temperature: "18.87",
      humidity: "16.86",
      pH: "7.34",
      rainfall: "80.06",
    },
    {
      name: "Coconut",
      nitrogen: "21.98",
      phosphorus: "16.93",
      potassium: "30.59",
      temperature: "27.41",
      humidity: "94.84",
      pH: "5.98",
      rainfall: "175.69",
    },
    {
      name: "Coffee",
      nitrogen: "101.20",
      phosphorus: "28.74",
      potassium: "29.94",
      temperature: "25.54",
      humidity: "58.87",
      pH: "6.81",
      rainfall: "158.07",
    },
    {
      name: "Cotton",
      nitrogen: "117.77",
      phosphorus: "46.24",
      potassium: "19.56",
      temperature: "23.99",
      humidity: "79.84",
      pH: "6.92",
      rainfall: "80.09",
    },
    {
      name: "Grapes",
      nitrogen: "23.18",
      phosphorus: "132.53",
      potassium: "200.11",
      temperature: "23.87",
      humidity: "81.87",
      pH: "6.25",
      rainfall: "69.91",
    },
    {
      name: "Jute",
      nitrogen: "78.40",
      phosphorus: "46.86",
      potassium: "39.99",
      temperature: "24.96",
      humidity: "79.64",
      pH: "6.73",
      rainfall: "174.79",
    },
    {
      name: "Lentil",
      nitrogen: "18.77",
      phosphorus: "68.36",
      potassium: "19.41",
      temperature: "24.51",
      humidity: "64.80",
      pH: "6.99",
      rainfall: "45.68",
    },
    {
      name: "Maize",
      nitrogen: "77.76",
      phosphorus: "48.44",
      potassium: "19.79",
      temperature: "22.61",
      humidity: "65.92",
      pH: "6.26",
      rainfall: "84.76",
    },
    {
      name: "Mango",
      nitrogen: "20.07",
      phosphorus: "27.18",
      potassium: "29.92",
      temperature: "31.90",
      humidity: "50.05",
      pH: "5.77",
      rainfall: "94.99",
    },
    {
      name: "Mothbeans",
      nitrogen: "21.44",
      phosphorus: "48.01",
      potassium: "20.23",
      temperature: "28.52",
      humidity: "53.16",
      pH: "6.85",
      rainfall: "51.22",
    },
    {
      name: "Mungbean",
      nitrogen: "20.99",
      phosphorus: "47.28",
      potassium: "19.87",
      temperature: "28.27",
      humidity: "85.95",
      pH: "6.74",
      rainfall: "48.44",
    },
    {
      name: "Muskmelon",
      nitrogen: "100.32",
      phosphorus: "17.72",
      potassium: "50.08",
      temperature: "28.66",
      humidity: "92.34",
      pH: "6.36",
      rainfall: "24.69",
    },
    {
      name: "Orange",
      nitrogen: "19.58",
      phosphorus: "16.55",
      potassium: "10.01",
      temperature: "22.77",
      humidity: "92.50",
      pH: "7.01",
      rainfall: "110.41",
    },
    {
      name: "Papaya",
      nitrogen: "49.88",
      phosphorus: "59.05",
      potassium: "50.04",
      temperature: "33.72",
      humidity: "92.40",
      pH: "6.74",
      rainfall: "142.63",
    },
    {
      name: "Pigeonpeas",
      nitrogen: "20.73",
      phosphorus: "67.73",
      potassium: "20.29",
      temperature: "27.74",
      humidity: "48.06",
      pH: "5.79",
      rainfall: "149.46",
    },
    {
      name: "Pomegranate",
      nitrogen: "18.87",
      phosphorus: "18.75",
      potassium: "40.21",
      temperature: "21.84",
      humidity: "90.13",
      pH: "6.43",
      rainfall: "107.53",
    },
    {
      name: "Rice",
      nitrogen: "79.89",
      phosphorus: "47.58",
      potassium: "39.87",
      temperature: "23.69",
      humidity: "82.27",
      pH: "6.43",
      rainfall: "236.18",
    },
    {
      name: "Watermelon",
      nitrogen: "99.42",
      phosphorus: "17.00",
      potassium: "50.22",
      temperature: "25.59",
      humidity: "85.16",
      pH: "6.50",
      rainfall: "50.79",
    },
    {
      name: "Kidneybeans",
      nitrogen: "20.75",
      phosphorus: "67.54",
      potassium: "20.05",
      temperature: "20.05",
      humidity: "21.61",
      pH: "5.78",
      rainfall: "105.92",
    },
  ];

  const tableBody = document
    .getElementById("crop-table")
    .getElementsByTagName("tbody")[0];
  cropData.forEach((crop) => {
    let row = tableBody.insertRow();
    Object.values(crop).forEach((text) => {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(text));
    });
  });
});

function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showCrop(crop) {
  const cropInfo = document.getElementById("cropInfo");
  let content = "";

  if (crop === "rice") {
    content = `
            <h2>Rice Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Rice: Rice (Oryza sativa) is a staple food crop in many parts of the world. This guide covers the complete process of cultivating rice from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified rice seeds.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Irrigation System:</strong> Flooding or controlled water supply setup.</li>
                <li><strong>Machinery:</strong> Tractors, transplanting machines (optional), sickles for manual harvesting.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common rice pests and weeds.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Rice grows best in clay or clay-loam soils with good water-holding capacity. The ideal soil pH is 5.5 to 6.5. Apply lime if pH adjustment is needed. Till the soil to break up large clods and smooth the field.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select high-yielding, pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against pests.</p>
            
            <h4>Field Preparation:</h4>
            <p>Level the field to ensure uniform water distribution. Prepare bunds (raised edges) around the field to retain water.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Rice is generally planted at the onset of the rainy season, around May to June, depending on the region.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Transplant seedlings at 20 x 15 cm spacing if using the transplanting method. For direct seeding, sow seeds about 2-3 cm deep.</p>
            
            <h4>Seeding Methods:</h4>
            <ul>
                <li><strong>Direct Seeding:</strong> Broadcasting seeds in the field or in rows.</li>
                <li><strong>Transplanting:</strong> Sow seeds in a nursery bed; transplant seedlings to the main field after 20-30 days.</li>
            </ul>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Maintain 5-10 cm of standing water in the field during most growth stages. Reduce water level during the grain ripening stage.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third during planting, one-third during tillering, and one-third during panicle initiation.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds with manual weeding, herbicides, or a combination of both. Perform the first weeding about 15-20 days after transplanting, followed by a second weeding after 40 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Watch for common pests like stem borers, leafhoppers, and planthoppers. Use appropriate pesticides and integrated pest management (IPM) practices to control pests and diseases like bacterial blight and rice blast.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from pests and diseases in the nursery.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure consistent water levels to promote healthy tillering and root development.</p>
            
            <h4>Flowering and Fruiting:</h4>
            <p>Maintain water levels and apply final fertilizer doses for optimal grain filling.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest when grains turn golden-yellow, and about 80-90% of the grains in the panicle are mature.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, manually harvest using sickles. For larger areas, use mechanical harvesters for efficiency.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow the rice grains to dry to a moisture content of about 14% to prevent spoilage. Thresh and winnow to separate grains from husks and impurities.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store rice grains in a cool, dry place with good ventilation. Ensure moisture levels are below 14% to prevent mold and spoilage.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider milling to remove the husk and bran layer, if required.</p>
            
            <h4>Packaging:</h4>
            <p>Pack rice in air-tight bags to retain freshness and prevent pest infestations.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Adverse weather conditions, pest outbreaks, water scarcity.</p>
            
            <h4>Solutions:</h4>
            <p>Implement IPM for pests, monitor water levels carefully, and diversify crop varieties to withstand climate variations.</p>
        `;
  }

  if (crop === "maize") {
    content = `
            <h2>Maize Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Maize: Maize (Zea mays), also known as corn, is a key cereal crop widely cultivated for its grains. This guide covers the complete process for cultivating maize from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified maize seeds (e.g., hybrid or improved open-pollinated varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Machinery:</strong> Tractor or hand tools for field preparation and planting.</li>
                <li><strong>Pest Control:</strong> Herbicides and insecticides specific to common maize pests and weeds.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, if rainwater is insufficient.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Maize thrives in well-drained loam soils with a pH of 5.8 to 7.0. Prepare the soil by tilling to break up clods and improve aeration.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, drought-resistant, or pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against soil-borne diseases and pests.</p>
            
            <h4>Field Preparation:</h4>
            <p>Level the field for uniform water distribution. Use row spacing and layout that will optimize sunlight exposure for all plants.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Maize is usually planted at the beginning of the rainy season; timing may vary by region but typically falls between April and June.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Plant seeds at 20-25 cm within rows and 60-75 cm between rows. Sow seeds about 2-5 cm deep, depending on soil type.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Plant seeds directly in the field, either manually or with seed planters for larger fields.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Maize requires regular watering, especially during the silking and tasseling stages. Use irrigation if rain is insufficient, particularly during dry spells.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third during planting, one-third during early growth, and one-third at tasseling.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds with manual weeding, hoeing, or pre- and post-emergence herbicides. Conduct the first weeding about 15-20 days after planting, followed by another at 30-40 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Watch for common pests like maize borers, armyworms, and aphids. Use pesticides and integrated pest management (IPM) practices to control pests and diseases like leaf blight and rust.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from pests and drought.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Apply nitrogen-rich fertilizer to promote leaf growth and vigor.</p>
            
            <h4>Silking and Tasseling Stage:</h4>
            <p>Ensure adequate moisture and provide pest protection as plants reach reproductive stages.</p>
            
            <h4>Grain-Filling Stage:</h4>
            <p>Maintain moisture levels and prevent pest infestations to support healthy kernel development.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest when the maize ears are fully mature and the husks are dry, typically when kernels have a moisture content of 20-25%.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, manually harvest by handpicking ears. For large-scale operations, use combine harvesters for efficiency.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Dry the maize to a moisture content of about 13-14% to prevent spoilage. Shell and clean the grains before storage.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store maize grains in a cool, dry place with good ventilation to avoid mold and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider drying and milling processes if further processing is required.</p>
            
            <h4>Packaging:</h4>
            <p>Use airtight bags or containers to maintain quality and prevent pest access.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Weather variability, pest and disease pressures, water scarcity.</p>
            
            <h4>Solutions:</h4>
            <p>Implement IPM practices for pest control, monitor soil moisture, and plant climate-resilient varieties.</p>
        `;
  }

  if (crop === "jute") {
    content = `
            <h2>Jute Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Jute: Jute is a fibrous crop mainly grown for its strong, natural fibers, widely used in textiles and packaging. This guide covers the complete process for cultivating jute from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified jute seeds (typically Corchorus olitorius or Corchorus capsularis).</li>
                <li><strong>Fertilizers:</strong> Organic compost, nitrogen, phosphorus, and potassium fertilizers.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation and planting.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common jute pests.</li>
                <li><strong>Irrigation Equipment:</strong> Flooding or controlled water system, if rainwater is insufficient.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Jute grows best in loamy, sandy-loam soils with good drainage and a pH range of 6.0 to 7.5. Prepare the soil by plowing and leveling it to break up clods and ensure good seedbed preparation.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding and disease-resistant seed varieties. Soak seeds in water for 24 hours before planting to encourage germination.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear and level the field for uniform water distribution. Create small bunds around the field if flooding is expected.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Jute is usually planted with the arrival of the monsoon, typically between March and May.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Sow seeds in rows with a spacing of 25-30 cm between rows. Plant seeds 1-2 cm deep for optimal germination.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Broadcasting: Scatter seeds evenly over the field. Row Planting: Sow seeds in rows, which facilitates weeding and other management activities.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Jute requires regular moisture; maintain adequate moisture, especially during the early growth phase. Avoid waterlogging by ensuring proper drainage, particularly after heavy rains.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a basal dose of nitrogen, phosphorus, and potassium fertilizers at planting. Additional nitrogen can be applied after thinning, about 20-25 days after sowing.</p>
            
            <h4>Weed Control:</h4>
            <p>Perform manual weeding or apply selective herbicides as needed, especially in the early stages. Conduct the first weeding 15-20 days after sowing, followed by another after 30-40 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for common pests like jute hairy caterpillars and aphids. Use pesticides or integrated pest management (IPM) practices to control pests and diseases like stem rot and anthracnose.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Ensure consistent moisture and protect from pests.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Thin plants to avoid overcrowding, leaving 5-7 cm between plants for optimal growth. Apply additional nitrogen for better fiber quality and plant height.</p>
            
            <h4>Fiber Maturity Stage:</h4>
            <p>Monitor the crop closely for signs of fiber maturity, such as yellowing of leaves at the base of the plant.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest jute when the plants are 10-12 feet tall and the lower leaves start to yellow, typically 100-120 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Cut the plants close to the base using a sickle or knife. For best fiber quality, harvest before the plants begin to flower.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Bundle the harvested jute plants and submerge them in clean, slow-moving water for retting (fermentation process to loosen the fibers). Retting usually takes 10-15 days; check fiber separation regularly.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Retting and Fiber Extraction:</h4>
            <p>After retting, wash the fibers in clean water and dry them under the sun. Sort fibers by quality and bundle them for storage or sale.</p>
            
            <h4>Storage Conditions:</h4>
            <p>Store dry jute fibers in a cool, dry, and well-ventilated place to avoid mold.</p>
            
            <h4>Packaging:</h4>
            <p>Package jute fibers in bundles and keep them dry to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Issues with water availability, pest infestations, and improper retting.</p>
            
            <h4>Solutions:</h4>
            <p>Use efficient irrigation and pest control methods, and monitor water levels carefully during retting to ensure fiber quality.</p>
        `;
  }

  if (crop === "cotton") {
    content = `
            <h2>Cotton Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Cotton: Cotton is a major fiber crop valued for its soft, fluffy fibers used in textiles. This guide covers the complete process for cultivating cotton from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified cotton seeds (e.g., Bt cotton or other pest-resistant varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium, and micronutrient fertilizers.</li>
                <li><strong>Irrigation System:</strong> Drip or furrow irrigation for dry regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common cotton pests.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and sprayers for pest control.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Cotton grows best in well-drained sandy-loam soils with a pH of 6.0 to 7.5. Prepare the field by deep plowing, followed by harrowing to break clods and smooth the surface.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against soil-borne diseases and early pest infestations.</p>
            
            <h4>Field Preparation:</h4>
            <p>Create furrows or beds for planting, depending on irrigation method. Ensure good drainage to prevent waterlogging, which cotton is sensitive to.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Cotton is typically planted in spring, from March to May, depending on the region and temperature.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Plant seeds 3-5 cm deep, with a spacing of 75-100 cm between rows and 25-30 cm between plants.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Plant seeds directly into prepared furrows or beds using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Cotton requires consistent moisture, especially during the flowering and boll formation stages. Use drip or furrow irrigation to maintain adequate soil moisture, particularly during dry spells.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third at planting, one-third during vegetative growth, and one-third at flowering.</p>
            
            <h4>Weed Control:</h4>
            <p>Use manual weeding, hoeing, or herbicides to control weeds, particularly during early growth stages. Perform weeding about 20-30 days after planting and again if necessary at 45 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for common pests like bollworms, aphids, and whiteflies. Use integrated pest management (IPM) practices, including biological controls, to minimize pesticide use.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from drought and pests to promote healthy establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure adequate nitrogen for leaf growth and develop a robust root system.</p>
            
            <h4>Flowering and Boll Formation Stage:</h4>
            <p>Monitor closely for pests, maintain moisture, and provide nutrient support to maximize fiber quality and yield.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest cotton when the bolls are fully open and the fibers are fluffy, typically 150-180 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest manually by picking mature bolls by hand. For large farms, use cotton-picking machines to harvest efficiently.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested cotton to dry in a shaded, ventilated area. Clean and gin the cotton to separate seeds from fiber.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store cotton fibers in a dry, well-ventilated place to avoid moisture-related damage and contamination.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider ginning for further fiber processing if needed.</p>
            
            <h4>Packaging:</h4>
            <p>Pack cotton in bales for storage and transport to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Issues with pest infestations, water availability, and soil nutrient depletion.</p>
            
            <h4>Solutions:</h4>
            <p>Use drought-resistant varieties, implement efficient irrigation, and follow IPM practices to manage pests.</p>
        `;
  }

  if (crop === "coconut") {
    content = `
            <h2>Coconut Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Coconut: The coconut palm (Cocos nucifera) is widely cultivated for its fruit, which provides oil, milk, and fiber. This guide covers the complete process for cultivating coconuts from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant coconut seedlings (dwarf or tall varieties).</li>
                <li><strong>Fertilizers:</strong> Organic manure, nitrogen, phosphorus, potassium, and micronutrients.</li>
                <li><strong>Irrigation System:</strong> Drip or basin irrigation, especially for dry regions.</li>
                <li><strong>Pest Control:</strong> Pesticides or biocontrol agents specific to common coconut pests.</li>
                <li><strong>Tools:</strong> Hand tools or mechanical equipment for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Coconut palms grow best in well-drained sandy loam soils with a pH of 5.5 to 7.5. Ensure proper drainage to prevent waterlogging, which can harm coconut roots. Dig planting pits (1 x 1 x 1 m) and fill with a mixture of soil, compost, and organic manure for better root establishment.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select disease-resistant, high-yielding coconut seedlings. Dwarf varieties are preferable for easy harvesting, while tall varieties are generally more drought-resistant.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris. Space the pits according to the planting layout and ensure that they are well-drained.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Coconut is typically planted at the onset of the rainy season to reduce watering needs, though it can be planted year-round in irrigated areas.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>For tall varieties, maintain 7.5 to 9 meters between palms; for dwarf varieties, keep 6.5 to 7 meters. Plant seedlings in prepared pits so that the roots are well covered.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Place the coconut seedling in the center of the pit, ensuring that the collar of the plant is just above ground level.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Water regularly during the first three years of growth, especially in dry seasons. Mature coconut palms are relatively drought-resistant but benefit from regular watering for higher yields.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer three times a year (nitrogen, phosphorus, and potassium), along with micronutrients like magnesium and boron. Incorporate organic compost or manure annually to improve soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Keep the area around the palm weed-free, particularly during the early growth stages. Mulching with organic material helps control weeds and retain soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for common pests like rhinoceros beetles, red palm weevils, and scale insects. Use pesticides as needed or biological control methods to minimize pest damage. Diseases such as root wilt and bud rot can be managed with preventive fungicides and by removing affected fronds.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Ensure adequate water and nutrients to promote strong root and leaf development.</p>
            
            <h4>Juvenile Stage:</h4>
            <p>Encourage growth with regular fertilization and weed control.</p>
            
            <h4>Mature Stage:</h4>
            <p>Maintain proper irrigation and pest management to maximize nut yield.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Coconuts reach maturity about 12 months after flowering. Harvest mature nuts when the outer husk turns brown. Harvesting can be done every 45-60 days in high-yield varieties.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Harvest coconuts manually with climbing tools or mechanical lifters for tall trees.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Dehusk the coconuts and dry them if needed, depending on the purpose (e.g., for copra or oil production).</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store coconuts in a dry, well-ventilated area to prevent moisture buildup and mold.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Copra (dried coconut) can be prepared by drying the coconut flesh in the sun or with mechanical dryers.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried coconuts in bags or crates for transportation to prevent damage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Drought, pest infestations, soil nutrient depletion.</p>
            
            <h4>Solutions:</h4>
            <p>Use drip irrigation, implement integrated pest management, and maintain soil fertility with organic amendments.</p>
        `;
  }

  if (crop === "chickpea") {
    content = `
            <h2>Chickpea Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Chickpea: Chickpea (Cicer arietinum) is a popular legume grown for its protein-rich seeds, used widely in food production. This guide covers the complete process for cultivating chickpeas from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant chickpea seeds (desi or kabuli types).</li>
                <li><strong>Fertilizers:</strong> Primarily phosphorus; minimal nitrogen since chickpeas fix their own nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation for dry conditions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for common chickpea pests.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and sprayers for pest control.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Chickpeas grow best in well-drained, loamy soils with a pH of 6.0 to 7.5. Plow the field and harrow to achieve a fine tilth, which ensures good root penetration.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select high-yielding, disease-resistant seed varieties. Treat seeds with rhizobium bacteria for enhanced nitrogen fixation, and fungicides to prevent soil-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and level it. Prepare rows or beds with sufficient spacing to promote air circulation and reduce disease risk.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Chickpeas are typically planted in cool, dry seasons, often after the monsoon, between October and November.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 30-40 cm apart in rows that are 45-60 cm apart. Sow seeds about 5-8 cm deep, depending on soil moisture and type.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field with a seed drill or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Chickpeas are drought-tolerant but benefit from watering during flowering and pod filling if rainfall is insufficient. Avoid excessive watering, as waterlogging can harm roots and encourage disease.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Chickpeas generally require low nitrogen but respond well to phosphorus. Apply a basal dose of phosphorus at planting. Potassium and micronutrient supplements may be added if soil tests indicate deficiencies.</p>
            
            <h4>Weed Control:</h4>
            <p>Keep the field weed-free, especially in the early growth stages. Use manual weeding or herbicides. Perform the first weeding about 20-30 days after planting, followed by another at 45-50 days if needed.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests like pod borers, aphids, and cutworms. Use integrated pest management (IPM) practices and apply biopesticides or chemical pesticides if needed to manage major pests and diseases like wilt and blight.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young seedlings from pests and ensure moderate soil moisture for proper establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Maintain phosphorus levels to encourage root and leaf development.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Ensure adequate soil moisture for optimal pod development and maximize yield potential.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest chickpeas when the plants turn yellow and the pods dry, usually 3-4 months after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting plants at the base. For larger farms, use a combine harvester to gather the crop efficiently.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Dry the harvested plants in the sun to reduce moisture content in the seeds. Thresh and clean the seeds to prepare them for storage or sale.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store chickpeas in a dry, cool place with proper ventilation to avoid insect infestations and moisture-related spoilage.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade the seeds for quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack chickpeas in breathable bags to maintain quality and avoid moisture buildup.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Pest infestations, diseases, water stress, and nutrient deficiencies.</p>
            
            <h4>Solutions:</h4>
            <p>Apply IPM practices for pest control, use disease-resistant varieties, and ensure proper soil fertility through regular soil testing.</p>
        `;
  }

  if (crop === "pigeonpeas") {
    content = `
            <h2>Pigeon Pea Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Pigeon Peas: Pigeon peas (Cajanus cajan) are a drought-resistant legume valued for their high protein content and use in various dishes. This guide covers the complete process for cultivating pigeon peas from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant pigeon pea seeds (early, medium, or late maturing varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, and potassium; minimal nitrogen is needed as they fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, especially in dry regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common pigeon pea pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Pigeon peas grow best in well-drained sandy loam to clay loam soils with a pH of 6.0 to 7.5. Prepare the field by plowing and harrowing to create a fine seedbed.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select high-yielding, disease-resistant varieties suitable for your region. Treat seeds with fungicides to prevent seed-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris, and ensure good drainage.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Pigeon peas are typically planted at the beginning of the rainy season or during the dry season in subtropical regions.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 30-40 cm apart in rows that are 60-75 cm apart. Sow seeds 3-5 cm deep, depending on soil moisture and texture.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Pigeon peas are drought-resistant but require adequate moisture during flowering and pod development. Watering should be done if rainfall is insufficient, especially in the first 60 days after planting.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting and top-dress with nitrogen if necessary. Organic amendments can also be added to improve soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds during the early growth stages using manual weeding or herbicides. Mulching can help suppress weeds and retain soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as pod borers, aphids, and whiteflies. Implement integrated pest management (IPM) strategies, including biological controls and chemical pesticides as needed.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young seedlings from pests and maintain adequate soil moisture for establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure sufficient nutrients are available to promote strong growth and development.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Provide consistent moisture during flowering and pod formation to maximize yield and seed quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest pigeon peas when the pods are mature and dry, usually 4-6 months after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting off the entire plant or individual pods. For larger farms, use a combine harvester for efficient gathering.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested plants to dry in the sun before threshing to reduce seed moisture content.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store pigeon peas in a dry, cool, and well-ventilated area to prevent spoilage and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade seeds to ensure quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried pigeon peas in breathable bags or containers to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Pest infestations, diseases, water stress, and nutrient deficiencies.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant varieties, practice crop rotation, and apply IPM practices to effectively manage pests and diseases.</p>
        `;
  }

  if (crop === "mothbeans") {
    content = `
            <h2>Moth Bean Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Moth Beans: Moth beans (Vigna aconitifolia) are a drought-resistant legume commonly grown in arid regions. They are valued for their high protein content and are used in various culinary applications. This guide covers the complete process for cultivating moth beans from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant moth bean seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; minimal nitrogen is needed as they fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, especially useful in dry regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for common moth bean pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Moth beans thrive in well-drained sandy loam or clay soils with a pH of 6.0 to 8.0. Prepare the field by plowing and harrowing to create a fine seedbed.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select high-yielding, drought-tolerant varieties suitable for local conditions. Treat seeds with fungicides or insecticides to protect against seed-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris to ensure good seed-to-soil contact.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Moth beans are typically planted at the onset of the monsoon season, between June and July.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 30-45 cm apart in rows that are 60-75 cm apart. Sow seeds 3-5 cm deep, depending on soil moisture.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Moth beans are highly drought-resistant, but consistent moisture is beneficial during flowering and pod development. Water if rainfall is insufficient, especially during critical growth stages.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting; additional nitrogen may be applied if soil tests indicate a deficiency. Organic amendments can help improve soil fertility and structure.</p>
            
            <h4>Weed Control:</h4>
            <p>Implement weed control practices, especially during the early growth stages. Use manual weeding or herbicides as necessary. Mulching can also help suppress weeds and retain soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, pod borers, and leafhoppers. Use integrated pest management (IPM) strategies, including cultural controls and chemical pesticides if necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Ensure moderate soil moisture and protect young seedlings from pests and diseases.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Maintain nutrient levels to support healthy growth and development.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Provide consistent moisture during flowering and pod formation to enhance yield potential.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest moth beans when the pods are mature and dry, usually 90-120 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting off the pods or entire plants. For larger farms, a combine harvester can be used for efficient collection.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested plants to dry in the sun before threshing to reduce seed moisture content.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store moth beans in a dry, cool place with good ventilation to prevent spoilage and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade seeds to ensure quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried moth beans in breathable bags or containers to maintain quality during storage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and adverse weather conditions.</p>
            
            <h4>Solutions:</h4>
            <p>Use drought-resistant varieties, implement IPM practices, and ensure proper soil management to overcome challenges.</p>
        `;
  }

  if (crop === "mungbean") {
    content = `
            <h2>Mung Bean Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Mung Beans: Mung beans (Vigna radiata) are small, green legumes highly valued for their nutritional content and culinary versatility. This guide covers the complete process for cultivating mung beans from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant mung bean seeds.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, and potassium; mung beans generally fix their own nitrogen, so low nitrogen application is sufficient.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, especially in drier regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Mung beans prefer well-drained sandy loam to loamy soils with a pH of 6.0 to 7.5. Prepare the field by plowing and harrowing to achieve a fine seedbed.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, disease-resistant varieties suitable for your climate. Treat seeds with fungicides to protect against soil-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris to ensure good seed-to-soil contact.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Mung beans are typically planted at the beginning of the rainy season or in warm, dry conditions between April and June.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 30-40 cm apart in rows that are 45-60 cm apart. Sow seeds 2-4 cm deep, depending on soil moisture.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Mung beans require adequate moisture, particularly during germination and flowering. Water if rainfall is insufficient, ensuring not to overwater to prevent root rot.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting. Additional nitrogen may be applied if needed, but usually, the natural fixation suffices. Incorporate organic matter to improve soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds during the early growth stages through manual weeding or the application of herbicides. Mulching can help suppress weeds and conserve soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, beetles, and thrips. Use integrated pest management (IPM) strategies, including biological controls and pesticides if necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young seedlings from pests and maintain adequate moisture for establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure sufficient nutrients for strong growth, particularly during the flowering phase.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Consistent moisture during flowering and pod development is crucial for maximizing yield and quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest mung beans when the pods are mature and dry, usually 60-90 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting pods or entire plants. For larger operations, use a combine harvester for efficient collection.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested plants to dry in the sun before threshing to reduce seed moisture.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store mung beans in a dry, cool, and well-ventilated area to prevent spoilage and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade seeds to ensure quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried mung beans in breathable bags or containers to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and adverse weather conditions.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant varieties, implement IPM practices, and ensure proper soil and water management to mitigate challenges.</p>
        `;
  }

  if (crop === "blackgram") {
    content = `
            <h2>Black Gram Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Black Gram: Black gram (Vigna mungo) is a highly nutritious legume valued for its high protein content and is widely used in various culinary dishes. This guide covers the complete process for cultivating black gram from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant black gram seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; minimal nitrogen is needed as black gram plants can fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation systems, particularly in regions with inconsistent rainfall.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Black gram prefers well-drained sandy loam to clay loam soils with a pH of 6.0 to 7.5. Prepare the field by plowing and harrowing to create a fine seedbed.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding and disease-resistant varieties suitable for local conditions. Treat seeds with fungicides or insecticides to protect against soil-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris to ensure good seed-to-soil contact.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Black gram is typically planted at the beginning of the monsoon season or during warm, dry conditions, generally between June and July.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 30-45 cm apart in rows that are 60-75 cm apart. Sow seeds 3-5 cm deep, depending on soil moisture.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Black gram requires adequate moisture, especially during germination and flowering. Water if rainfall is insufficient, but avoid overwatering to prevent root rot.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting. Additional nitrogen is generally not necessary due to nitrogen fixation. Incorporate organic matter to improve soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Implement weed control practices, especially during the early growth stages, through manual weeding or herbicides. Mulching can help suppress weeds and conserve soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, pod borers, and thrips. Use integrated pest management (IPM) strategies, including biological controls and pesticides if necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young seedlings from pests and maintain adequate soil moisture for establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure sufficient nutrients are available to support healthy growth, especially during flowering.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Consistent moisture during flowering and pod development is crucial for maximizing yield and seed quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest black gram when the pods are mature and dry, usually 60-90 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting off the pods or entire plants. For larger farms, a combine harvester can be used for efficient collection.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested plants to dry in the sun before threshing to reduce seed moisture content.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store black gram in a dry, cool, and well-ventilated area to prevent spoilage and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade seeds to ensure quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried black gram in breathable bags or containers to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and adverse weather conditions.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant varieties, implement IPM practices, and ensure proper soil and water management to mitigate challenges.</p>
        `;
  }

  if (crop === "lentil") {
    content = `
            <h2>Lentil Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Lentils: Lentils (Lens culinaris) are nutritious legumes known for their high protein and fiber content. They are widely cultivated for food and are a staple in many cuisines. This guide covers the complete process for cultivating lentils from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant lentil seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; nitrogen application is minimal as lentils can fix atmospheric nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation systems for moisture management.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for managing common pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Lentils prefer well-drained loamy or sandy soils with a pH of 6.0 to 7.5. Prepare the field by plowing and harrowing to create a fine seedbed.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, disease-resistant varieties suited to your region. Treat seeds with fungicides or insecticides to protect against seed-borne diseases.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris to ensure good seed-to-soil contact.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Lentils are typically planted in early spring or late winter, depending on the climate, when soil temperatures reach around 10-15°C (50-59°F).</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 25-30 cm apart in rows that are 45-60 cm apart. Sow seeds 2-3 cm deep, adjusting based on soil moisture.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared field using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Lentils are drought-tolerant but need adequate moisture during germination and pod development. Water if rainfall is insufficient, particularly during flowering and seed filling.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting; additional nitrogen is typically not needed due to nitrogen fixation. Incorporate organic matter to enhance soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds during early growth using manual weeding or herbicides. Mulching can also help suppress weeds and retain soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, lygus bugs, and root rots. Implement integrated pest management (IPM) strategies, including biological controls and chemical pesticides if necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young seedlings from pests and maintain adequate soil moisture for establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure sufficient nutrients are available to promote healthy growth.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Consistent moisture is crucial during flowering and seed filling to maximize yield.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest lentils when the pods are brown and dry, usually 80-100 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by cutting the plants or pods. For larger operations, use a combine harvester for efficient collection.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested lentils to dry in the sun before threshing to reduce seed moisture content.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store lentils in a dry, cool, and well-ventilated area to prevent spoilage and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade seeds to ensure quality before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried lentils in breathable bags or containers to maintain quality during storage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and variable weather conditions.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant varieties, implement IPM practices, and ensure proper soil and water management to overcome challenges.</p>
        `;
  }

  if (crop === "pomegranate") {
    content = `
            <h2>Pomegranate Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Pomegranates: Pomegranates (Punica granatum) are nutritious fruits known for their health benefits and vibrant flavor. They are cultivated in many parts of the world and thrive in warm climates. This guide covers the complete process for cultivating pomegranates from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds or Seedlings:</strong> High-quality pomegranate seeds or healthy seedlings from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium.</li>
                <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or furrow irrigation.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides for managing pests and diseases.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for planting, pruning, and maintenance.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Pomegranates prefer well-drained, sandy loam to loamy soils with a pH of 5.5 to 7.0. Prepare the planting site by plowing and incorporating organic matter.</p>
            
            <h4>Seed/Seedling Selection and Treatment:</h4>
            <p>Choose disease-resistant varieties suitable for your region's climate. If using seeds, soak them overnight in water before planting to improve germination rates.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the site of weeds, rocks, and debris to ensure a clean planting environment.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Pomegranates are typically planted in spring after the last frost.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 5-8 feet apart to allow for proper growth and air circulation. Plant seeds or seedlings at a depth of 1-2 inches, ensuring good soil contact.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the prepared site. Transplanting: For seedlings, dig a hole slightly larger than the root ball and backfill with soil.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Pomegranates require regular watering, especially during the establishment phase; once established, they are drought-tolerant. Water deeply but infrequently to encourage deep root growth.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer during the growing season, typically in early spring and again in late summer. Incorporate organic compost to improve soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds using mulching and manual weeding to reduce competition for nutrients.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, whiteflies, and pomegranate butterflies. Implement integrated pest management (IPM) strategies, including the use of natural predators and organic pesticides.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from extreme weather and pests. Use mulch to retain moisture.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and pest infestations; apply fertilizers as needed.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure adequate water during flowering and fruit set to promote healthy development.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Pomegranates are typically ready for harvest 5-7 months after flowering, when the fruit has a deep color and makes a metallic sound when tapped.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use sharp pruning shears to cut the fruit from the tree, avoiding damage to the branches and other fruit.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Handle fruits gently to prevent bruising; store in a cool, dry place.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store pomegranates in a cool, dry environment; they can last several weeks to months in proper conditions.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and sort harvested fruits, discarding any damaged or rotten ones.</p>
            
            <h4>Packaging:</h4>
            <p>Pack fruits in breathable containers to maintain quality during storage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and environmental stresses such as drought or excessive moisture.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant varieties, implement proper irrigation practices, and monitor pest populations to mitigate challenges.</p>
        `;
  }

  if (crop === "watermelon") {
    content = `
            <h2>Watermelon Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Watermelons: Watermelons (Citrullus lanatus) are large, juicy fruits beloved for their refreshing taste and high water content. They thrive in warm climates and are typically grown during the summer months. This guide outlines the complete process for cultivating watermelons, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> High-quality watermelon seeds or seedlings from reputable sources.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or overhead irrigation systems for effective moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, hoes, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Watermelons prefer well-drained, sandy loam soils with a pH of 6.0 to 6.8. Prepare the soil by tilling and mixing in organic matter to enhance drainage and fertility.</p>
            
            <h4>Seed/Seedling Selection and Treatment:</h4>
            <p>Choose disease-resistant varieties suitable for your climate and market. If using seeds, consider soaking them in water for a few hours before planting to improve germination rates.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant watermelons is after the last frost date when soil temperatures are consistently above 70°F (21°C).</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space watermelon plants 3-5 feet apart in rows that are 6-8 feet apart to allow for sprawling vines. Plant seeds or seedlings at a depth of about 1 inch.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Direct Seeding: Plant seeds directly into the ground after soil temperatures warm up. Transplanting: Start seedlings indoors and transplant them once they are sturdy enough.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Watermelons need consistent moisture, especially during germination and fruit development. Irrigate regularly, aiming for about 1-2 inches of water per week.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer at planting and again when vines begin to run. Consider using compost or organic mulch to enhance soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, cucumber beetles, and spider mites. Manage diseases like powdery mildew and downy mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of biological controls.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from pests and extreme weather. Consider using row covers for protection against pests and frost.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Support vines if necessary, especially when fruit begins to develop.</p>
            
            <h4>Fruit Development Stage:</h4>
            <p>Ensure adequate water supply during fruit development to promote healthy growth and sweetness. Avoid watering directly on the fruit to prevent rot.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Watermelons are typically ready for harvest 70-90 days after planting. Indicators include a dull skin, yellow underside, and a hollow sound when tapped.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or pruning shears to cut the fruit from the vine, leaving a few inches of stem attached to the watermelon.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Handle harvested watermelons gently to avoid bruising. Store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store watermelons in a cool, dry place. They can be kept at room temperature for a week or two, or in refrigeration for extended freshness.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, watermelons can be processed into juice, smoothies, or pickles.</p>
            
            <h4>Packaging:</h4>
            <p>Pack watermelons in breathable containers to help maintain quality during storage and transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses such as drought or excess moisture, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "kidneybeans") {
    content = `
            <h2>Kidney Bean Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Kidney Beans: Kidney beans (Phaseolus vulgaris) are a high-protein legume commonly used in various cuisines. This guide covers the complete process for cultivating kidney beans from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant kidney bean seeds.</li>
                <li><strong>Fertilizers:</strong> Phosphorus and potassium; minimal nitrogen as beans fix their own nitrogen.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides for common kidney bean pests.</li>
                <li><strong>Tools:</strong> Hand tools or tractors for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Kidney beans thrive in well-drained, loamy soils with a pH between 6.0 and 7.0. Prepare the field by plowing and harrowing to create a fine tilth for easy root penetration.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, disease-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against early soil-borne diseases and pests.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris, then level it. Mark rows with adequate spacing for air circulation and sunlight penetration.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Kidney beans are typically planted in spring when soil temperatures reach 15°C (59°F) and there is no risk of frost.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Plant seeds 3-5 cm deep, with 8-10 cm between plants and 45-60 cm between rows.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Sow seeds directly into the field by hand or using a seed drill.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Kidney beans need regular watering, particularly during flowering and pod development. Avoid overwatering, as beans are sensitive to waterlogging.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply phosphorus and potassium at planting. Limit nitrogen since kidney beans fix atmospheric nitrogen. Supplement micronutrients if soil tests indicate deficiencies.</p>
            
            <h4>Weed Control:</h4>
            <p>Weed control is essential, particularly in the early stages. Use manual weeding or herbicides as needed. Mulching around plants can help retain moisture and suppress weeds.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests like aphids, leafhoppers, and bean beetles. Use integrated pest management (IPM) practices and apply pesticides if necessary. Prevent diseases like root rot and blight by practicing crop rotation and avoiding waterlogged soil.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Ensure moderate soil moisture and protect seedlings from pests.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Maintain nutrient levels to support robust leaf and stem growth.</p>
            
            <h4>Flowering and Pod-Filling Stage:</h4>
            <p>Provide consistent moisture during pod development to enhance yield and seed quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest kidney beans when the pods are fully mature and dry, usually 90-120 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest by hand by pulling up the entire plant. For larger farms, use a combine harvester to gather beans efficiently.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow the harvested plants to dry in the sun to reduce moisture in the seeds. Thresh the beans to separate them from the pods, then clean the seeds.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store kidney beans in a dry, well-ventilated place to prevent mold and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Clean and grade the beans for quality assurance before packaging.</p>
            
            <h4>Packaging:</h4>
            <p>Pack beans in breathable bags or containers to maintain quality during storage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Susceptibility to pests, diseases, and nutrient imbalances.</p>
            
            <h4>Solutions:</h4>
            <p>Use disease-resistant seeds, monitor soil health, and apply IPM practices to control pests and diseases effectively.</p>
        `;
  }

  if (crop === "banana") {
    content = `
            <h2>Banana Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Bananas: Bananas (Musa spp.) are tropical fruits renowned for their sweet flavor and nutritional benefits. They thrive in warm, humid climates and are cultivated worldwide for both commercial and home production. This guide outlines the complete process for cultivating bananas, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Healthy banana suckers or tissue-cultured plantlets.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic matter such as compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation systems for adequate moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides to manage pests and diseases.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Bananas prefer well-drained, rich loamy soils with a pH of 5.5 to 7.0. Prepare the soil by plowing and incorporating organic matter to improve fertility and drainage.</p>
            
            <h4>Sucker/Plantlet Selection and Treatment:</h4>
            <p>Select disease-free suckers from healthy parent plants or obtain tissue-cultured plantlets from a reputable source. If using suckers, cut them from the parent plant with a clean knife to avoid contamination.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant bananas is at the beginning of the rainy season or during the warmer months.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 8-10 feet apart in rows that are 10-12 feet apart to allow for proper growth and air circulation. Plant suckers or plantlets at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole large enough to accommodate the roots and backfill gently to avoid air pockets.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Bananas require consistent moisture; irrigate regularly, especially during dry spells. Aim for 1-2 inches of water per week.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Add compost or organic mulch to enhance soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds using mulching, which also helps retain soil moisture, and manual weeding to reduce competition for nutrients.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as banana weevils and aphids. Manage diseases like Panama disease and leaf spot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of biological pest control methods.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from extreme weather and pests; consider using shade cloth if necessary.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies, especially potassium and magnesium, and address them promptly.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure adequate water supply during flowering and fruit development to support healthy fruit formation.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Bananas are typically ready for harvest 9-12 months after planting, depending on the variety and growing conditions. Harvest when the fruit is plump, green, and the angle between the fruit and the stalk becomes more pronounced.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or machete to cut the entire bunch from the plant. Handle the fruit carefully to avoid bruising.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Remove any excess leaves and handle harvested bananas gently to prevent damage. Store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store bananas at room temperature until they ripen. Avoid exposure to direct sunlight or excessive heat.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, bananas can be processed into products like banana chips or puree.</p>
            
            <h4>Packaging:</h4>
            <p>Pack bananas in breathable boxes to allow for airflow and reduce spoilage during transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses, and improper watering.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "mango") {
    content = `
            <h2>Mango Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Mangoes: Mangoes (Mangifera indica) are tropical stone fruits known for their sweet and juicy flavor. They are often referred to as the "king of fruits" and are cultivated in many tropical and subtropical regions worldwide. This guide outlines the complete process for cultivating mangoes, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Healthy mango grafts or seedlings from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic matter such as compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation systems to manage soil moisture.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides to manage pests and diseases effectively.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Mangoes prefer well-drained, sandy loam or loamy soils with a pH of 5.5 to 7.5. Prepare the soil by plowing and mixing in organic matter to enhance drainage and fertility.</p>
            
            <h4>Graft/Seedling Selection and Treatment:</h4>
            <p>Select disease-free and high-yielding varieties suitable for your local climate. If using seeds, soak them in water for 24 hours before planting to improve germination rates.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant mangoes is at the beginning of the rainy season or during the warmer months.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space mango trees 25-30 feet apart to allow for adequate growth and air circulation. Plant grafts or seedlings at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole larger than the root ball and backfill gently to avoid air pockets.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Mangoes require regular watering during the establishment phase. Once established, they are drought-tolerant but benefit from supplemental irrigation during dry spells, especially during flowering and fruit development.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Add compost or organic mulch to enhance soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching and manual weeding to reduce competition for nutrients and moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as mango weevils, aphids, and fruit flies. Manage diseases like anthracnose and powdery mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including the use of natural predators and organic pesticides as necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from extreme weather and pests; consider using shade cloth if necessary.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Prune young trees to encourage a strong structure.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Mangoes are typically ready for harvest 3-6 months after flowering, depending on the variety. They should be harvested when they are fully colored, firm, and have a sweet aroma.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or pruning shears to cut the fruit from the stem, leaving a small portion of the stem attached to the fruit.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Handle harvested mangoes gently to avoid bruising and store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store mangoes at room temperature until they ripen. Once ripe, they can be refrigerated to extend shelf life.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, mangoes can be processed into products like mango puree, jams, or dried fruit.</p>
            
            <h4>Packaging:</h4>
            <p>Pack mangoes in breathable containers to help maintain their quality during storage and transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses such as drought, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "grapes") {
    content = `
            <h2>Grape Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Grapes: Grapes (Vitis vinifera and other species) are versatile fruits used for fresh eating, drying (raisins), and wine production. They thrive in temperate climates and require specific growing conditions to produce high-quality fruit. This guide outlines the complete process for cultivating grapes, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Quality grapevines, either bare-root or potted, from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip irrigation systems for efficient moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                <li><strong>Tools:</strong> Hand tools (pruners, shovels) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Grapes prefer well-drained, sandy loam or clay loam soils with a pH of 6.0 to 6.8. Prepare the soil by tilling and incorporating organic matter to enhance fertility and drainage.</p>
            
            <h4>Vine Selection and Treatment:</h4>
            <p>Select disease-resistant grape varieties suitable for your climate and purpose (table grapes, wine grapes, etc.). Inspect vines for signs of disease or damage before planting.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant grapes is in early spring after the last frost or in the fall before the ground freezes.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space vines 6-10 feet apart in rows that are 8-10 feet apart to allow for proper air circulation and growth. Plant vines at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole large enough to accommodate the roots, backfill gently, and water thoroughly after planting.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Grapes require regular watering during the first year to establish roots. Once established, they are drought-tolerant but still benefit from supplemental irrigation during dry spells, especially during fruit development.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Use organic compost to improve soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching, hand weeding, or the use of herbicides to reduce competition for nutrients and moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as grapevine moths, aphids, and spider mites. Manage diseases like powdery mildew and downy mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and natural predators.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Young Vine Stage:</h4>
            <p>Protect young vines from extreme weather and pests; use support stakes or trellises to help young plants grow upward.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Prune to encourage a strong structure and air circulation.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin clusters if necessary to promote larger fruit size.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Grapes are typically ready for harvest 4-6 months after flowering, depending on the variety. They should be harvested when fully ripe, showing deep color and sweet flavor.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use sharp pruning shears to cut clusters from the vine. Handle the fruit carefully to avoid bruising.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Remove any damaged or rotten grapes and store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store grapes in a cool, dry place. Refrigeration can extend their shelf life, but they should be kept in breathable containers.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, grapes can be processed into products like grape juice, jelly, or wine.</p>
            
            <h4>Packaging:</h4>
            <p>Pack grapes in breathable containers to allow airflow and reduce spoilage during transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, climate-related issues, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "muskmelon") {
    content = `
            <h2>Muskmelon (Cantaloupe) Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Muskmelons: Muskmelons (Cucumis melo var. cantaloupe) are sweet, aromatic fruits known for their juicy flesh and distinctive netted skin. They thrive in warm climates and are popular for their refreshing taste. This guide outlines the complete process for cultivating muskmelons, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Quality muskmelon seeds or seedlings from reputable sources.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or overhead irrigation systems for efficient moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, hoes, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Muskmelons prefer well-drained, sandy loam or loamy soils with a pH of 6.0 to 6.8. Prepare the soil by tilling and mixing in organic matter to enhance drainage and fertility.</p>
            
            <h4>Seed/Seedling Selection and Treatment:</h4>
            <p>Choose disease-resistant varieties suited for your climate and market. If using seeds, soak them in water for a few hours before planting to improve germination rates.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant muskmelons is after the last frost date when soil temperatures are consistently above 70°F (21°C).</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space muskmelon plants 3-4 feet apart in rows that are 6-8 feet apart to allow for sprawling vines. Plant seeds or seedlings at a depth of about 1 inch.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Direct Seeding: Plant seeds directly into the ground after the soil warms up. Transplanting: Start seedlings indoors and transplant them once they are strong enough.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Muskmelons need consistent moisture, especially during germination and fruit development. Aim for about 1-2 inches of water per week, adjusting for rainfall.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer at planting and again when vines begin to run. Use organic compost or mulch to enhance soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as aphids, cucumber beetles, and spider mites. Manage diseases like powdery mildew and downy mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of biological controls.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from pests and extreme weather. Use row covers if necessary to protect against pests and frost.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Support vines if necessary, especially when fruit begins to develop.</p>
            
            <h4>Fruit Development Stage:</h4>
            <p>Ensure adequate water supply during fruit development to promote healthy growth and sweetness. Avoid watering directly on the fruit to prevent rot.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Muskmelons are typically ready for harvest 70-90 days after planting. Indicators include a change in color from green to yellow at the blossom end and a sweet aroma.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or pruning shears to cut the fruit from the vine, leaving a short stem attached to the melon.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Handle harvested muskmelons gently to avoid bruising. Store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store muskmelons at room temperature until they are fully ripe. Once ripe, they can be refrigerated for a short period to extend freshness.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, muskmelons can be processed into smoothies, sorbets, or fruit salads.</p>
            
            <h4>Packaging:</h4>
            <p>Pack muskmelons in breathable containers to help maintain quality during storage and transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses such as drought or excessive moisture, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "apple") {
    content = `

    <h2>Apple Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Apples: Apples (Malus domestica) are one of the most popular fruits worldwide, appreciated for their taste, versatility, and nutritional value. They grow best in temperate climates and can be cultivated in various soil types. This guide outlines the complete process for cultivating apples, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality apple tree seedlings or grafted varieties from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Apples prefer well-drained, loamy soils with a pH of 6.0 to 7.0. Prepare the soil by tilling and incorporating organic matter to improve fertility and drainage.</p>

<h4>Tree Selection and Treatment:</h4>
<p>Choose disease-resistant apple varieties suited to your climate, considering factors such as fruit flavor and harvest time. Inspect seedlings for signs of disease or damage before planting.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to ensure a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant apple trees is in the fall or early spring when the trees are dormant.</p>

<h4>Spacing and Depth:</h4>
<p>Space dwarf varieties 4-6 feet apart and standard varieties 10-15 feet apart to allow for proper growth and air circulation. Plant trees at a depth that matches their nursery height, ensuring the graft union is above soil level.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the tree in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young apple trees regularly to establish roots, especially during dry spells. Once established, they are drought-tolerant but benefit from deep watering during fruit development.</p>

<h4>Nutrient Management:</h4>
<p>Apply a balanced fertilizer in early spring and again in mid-season. Use organic compost to enhance soil health.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as codling moths, aphids, and spider mites. Manage diseases like apple scab and powdery mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Young Tree Stage:</h4>
<p>Protect young trees from extreme weather and pests; consider using tree guards to prevent animal damage.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape trees and encourage a strong structure.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin fruit if necessary to promote larger apples.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Apples are typically ready for harvest 4-6 months after flowering, depending on the variety. Indicators include a change in color, firm texture, and ease of detachment from the tree.</p>

<h4>Harvesting Techniques:</h4>
<p>Use sharp pruning shears to cut apples from the tree, leaving a short stem attached to the fruit.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested apples gently to avoid bruising. Store them in a cool, shaded area.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Storage Conditions:</h4>
<p>Store apples in a cool, dark place. They can be refrigerated to extend their shelf life.</p>

<h4>Processing (if applicable):</h4>
<p>If needed, apples can be processed into applesauce, cider, or dried slices.</p>

<h4>Packaging:</h4>
<p>Pack apples in breathable containers to help maintain quality during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and improper pruning techniques.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>

`;
  }

  if (crop === "orange") {
    content = `
  <h2>Orange Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Oranges: Oranges (Citrus sinensis) are one of the most popular citrus fruits, valued for their sweet, juicy flesh and high vitamin C content. They thrive in warm, subtropical to tropical climates. This guide outlines the complete process for cultivating oranges, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality orange tree seedlings or grafted varieties from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Citrus-specific fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for efficient moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Oranges prefer well-drained, sandy loam or clay loam soils with a pH of 6.0 to 7.5. Prepare the soil by tilling and incorporating organic matter to improve fertility and drainage.</p>

<h4>Tree Selection and Treatment:</h4>
<p>Choose disease-resistant varieties suited to your climate, considering factors such as fruit flavor and harvest time. Inspect seedlings for signs of disease or damage before planting.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to ensure a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant orange trees is in the spring after the danger of frost has passed.</p>

<h4>Spacing and Depth:</h4>
<p>Space trees 12-25 feet apart, depending on the rootstock and tree variety, to allow for proper growth and air circulation. Plant trees at a depth that matches their nursery height, ensuring the graft union is above soil level.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the tree in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young orange trees regularly to establish roots, especially during dry spells. Mature trees require deep watering during dry periods.</p>

<h4>Nutrient Management:</h4>
<p>Apply a citrus-specific fertilizer in early spring and again in mid-season. Use organic compost to enhance soil health.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as aphids, spider mites, and citrus leaf miners. Manage diseases like citrus canker and root rot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Young Tree Stage:</h4>
<p>Protect young trees from extreme weather and pests; consider using tree guards to prevent animal damage.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape trees and encourage a strong structure.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin fruit if necessary to promote larger oranges.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Oranges are typically ready for harvest 7-12 months after flowering, depending on the variety. Indicators include a change in color, firmness, and sweetness.</p>

<h4>Harvesting Techniques:</h4>
<p>Use sharp pruning shears to cut oranges from the tree, leaving a short stem attached to the fruit.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested oranges gently to avoid bruising. Store them in a cool, shaded area.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Storage Conditions:</h4>
<p>Store oranges in a cool, dark place. They can be refrigerated to extend their shelf life.</p>

<h4>Processing (if applicable):</h4>
<p>If needed, oranges can be processed into juice, marmalade, or dried slices.</p>

<h4>Packaging:</h4>
<p>Pack oranges in breathable containers to help maintain quality during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and improper pruning techniques.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
`;
  }

  if (crop === "papaya") {
    content = `

<h2>Papaya Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Papayas: Papayas (Carica papaya) are tropical fruit trees known for their sweet, juicy flesh and vibrant orange color. They thrive in warm climates and can produce fruit year-round under optimal conditions. This guide outlines the complete process for cultivating papayas, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality papaya seeds or seedlings from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Papayas prefer well-drained, sandy loam or loamy soils with a pH of 6.0 to 6.5. Prepare the soil by tilling and incorporating organic matter to enhance drainage and fertility.</p>

<h4>Seed/Seedling Selection and Treatment:</h4>
<p>Choose disease-resistant varieties suitable for your climate. If using seeds, soak them for a few hours before planting to improve germination rates.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to create a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant papayas is in the spring when temperatures are consistently warm.</p>

<h4>Spacing and Depth:</h4>
<p>Space papaya plants 6-10 feet apart to allow for their large canopy and root system. Plant seeds or seedlings at a depth of about 0.5 to 1 inch.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Direct Seeding: Plant seeds directly in the ground after the last frost.<br>
Transplanting: Start seedlings indoors and transplant them when they are about 12 inches tall.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young papaya plants regularly, especially during dry spells. Papayas require consistent moisture but do not tolerate waterlogging.</p>

<h4>Nutrient Management:</h4>
<p>Apply a balanced fertilizer every 4-6 weeks during the growing season. Use organic compost to enhance soil fertility.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as aphids, whiteflies, and fruit flies. Manage diseases like powdery mildew and root rot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Seedling Stage:</h4>
<p>Protect young plants from extreme weather and pests. Use row covers if necessary to shield from frost and insects.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune any dead or damaged leaves to promote healthy growth.</p>

<h4>Fruit Development Stage:</h4>
<p>Ensure adequate water supply during fruit development. Thin excess fruits if necessary to allow for larger fruit size.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Papayas are typically ready for harvest 6-12 months after planting, depending on the variety. Indicators include a change in skin color from green to yellow and a sweet aroma.</p>

<h4>Harvesting Techniques:</h4>
<p>Use a sharp knife to cut the fruit from the tree, leaving a small portion of the stem attached.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested papayas gently to avoid bruising. Store them in a cool, shaded area.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Storage Conditions:</h4>
<p>Store papayas at room temperature to ripen further. Once ripe, they can be refrigerated for a short period to extend freshness.</p>

<h4>Processing (if applicable):</h4>
<p>If needed, papayas can be processed into smoothies, salads, or dried fruit.</p>

<h4>Packaging:</h4>
<p>Pack papayas in breathable containers to maintain quality during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or flooding), and improper watering practices.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>

    `;
  }

  if (crop === "coffee") {
    content = `
<h2>Coffee Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Coffee: Coffee (Coffea spp.) is one of the most widely consumed beverages globally, known for its stimulating properties and rich flavor. It thrives in tropical climates, typically at higher altitudes, where conditions are ideal for its growth. This guide outlines the complete process for cultivating coffee, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality coffee seedlings or seeds from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Balanced fertilizers rich in nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Coffee prefers well-drained, loamy soils with a pH of 6.0 to 6.5. Prepare the soil by tilling and incorporating organic matter to enhance fertility and drainage.</p>

<h4>Seed/Seedling Selection and Treatment:</h4>
<p>Choose disease-resistant coffee varieties suitable for your climate. If using seeds, soak them for 24 hours to improve germination rates.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to create a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant coffee is at the beginning of the rainy season.</p>

<h4>Spacing and Depth:</h4>
<p>Space coffee plants 5-8 feet apart to allow for proper growth and air circulation. Plant seedlings at a depth that matches their nursery height, ensuring the root collar is level with the soil surface.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the seedling in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young coffee plants regularly to establish roots, especially during dry spells. Mature plants prefer consistent moisture but should not be waterlogged.</p>

<h4>Nutrient Management:</h4>
<p>Apply a balanced fertilizer every 3-4 months during the growing season. Use organic compost to enhance soil fertility.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as coffee borer beetles and leaf rust. Manage diseases like root rot and leaf spot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Seedling Stage:</h4>
<p>Protect young plants from extreme weather and pests. Use shade cloth if necessary to shield from intense sunlight.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape plants and remove any dead or diseased branches.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure adequate water supply during flowering and fruit set to maximize yield and fruit quality. Monitor for fruit fly infestations and control as necessary.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Coffee cherries are typically ready for harvest 7-9 months after flowering, depending on the variety. Indicators include a change in color from green to bright red or yellow.</p>

<h4>Harvesting Techniques:</h4>
<p>Harvest coffee cherries by hand, picking only the ripe ones. Use a selective picking method for quality.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested cherries gently to avoid bruising. Process them as soon as possible to prevent spoilage.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Processing Methods:</h4>
<p>Use either the dry method (sun-drying cherries) or the wet method (fermenting and washing cherries) to extract the coffee beans.</p>

<h4>Storage Conditions:</h4>
<p>Store processed coffee beans in a cool, dry place to prevent spoilage and maintain flavor.</p>

<h4>Packaging:</h4>
<p>Pack coffee beans in airtight containers to help preserve freshness during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and fluctuating market prices.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>


    `;
  }

  cropInfo.innerHTML = content;
  cropInfo.style.display = content ? "block" : "none";
}
