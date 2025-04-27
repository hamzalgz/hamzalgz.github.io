AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist: DATA SCIENTIST",
    cardImage: "./assets/images/experience-page/attijariwafa.png",
    place: "Attijariwafa Bank",
    time: "(Jul 2023 - Present)",
    desp: `
    <ul>
    <li><b>building chatbots for attijariwafa bank Used: Rasa open source, postman, docker, Kubernetes. OpenShift, jenkins CI, Argo CD, Harbor, Git, Gitlab, jira, PostgreSQL.</b>.</li>
    <li>building models for NLP Used: PyTorch, TensorFlow, HuggingFace, Transformers.</li>
    <li>Experience in evaluating, fine-tuning, and deploying Large Language Models (LLM) in production environments.</li>
    </ul>
    `,
  },
  {
    title: "Computer Vision Engineer: Computer Vision in Retail and Logistics",
    cardImage: "./assets/images/experience-page/e-marocwave.png",
    place: "E-Maroc Wave",
    time: "(Dec 2022 - Jul 2023)",
    desp: `
    <ul>
    <li><b>building model that can detect and count sold products in a supermarket based on cameras using <b>pytorch, opencv, Hikvision, Yolov7</b>.</li>
    <li>building model that can detect and count the Mattresses in the factory and the Warehouse using pytorch, opencv, Yolov5, Yolov8, detectron2.</li>
    <li>Tracking object for counting using DeepSORT, StrongSORT.</li>
    <li>Labeling the data using bounding boxes and segmentation: LabelImg server and segment anything model (SAM).</li>
    <li>Collecting, managing and storing data using Hikvision, AWS Sagemaker Notebooks, EC2 and AWS S3.</li>
    <li>Building a speech-to-text model using Hugging face transformers that can convert Moroccan Darija (a variant of Arabic spoken in Morocco) speech to English and french transcription using: whisper transformers.</li>
    </ul>
    `,
  },
  {
    title: "Data Scientist",
    cardImage: "./assets/images/experience-page/uptimai.png",
    place: "UptimAI",
    time: "(Oct 2022 - Dec 2022)",
    desp: `
    I was responsible for:
    <ul>
    <li>Create and Develop a graphical user interface GUI Using: QML, JavaScript, Python, PySide2, Qt Quick, Git.</li>
    </ul>
    `,
  },
  {
    title: "Computer Vision Intern",
    cardImage: "./assets/images/experience-page/Adria.jpg",
    place: "Adria Business & Technology",
    time: "(Mar 2022 - Aug 2022)",
    desp: `
    I was responsible for:
    <ul>
    <li>french handwriting for check banking. Using OCR, craft, Pytorch, tensorflow, opencv, sklearn, skimage, flask, onnx, gunicorn,
    keras, YOLOV5, EAST, ssd mobilenet v2, ctpn</li>
    </ul>
    `,
  },
  {
    title: "Computer Vision Intern: Computer Vision in Agriculture (plant diseases)",
    cardImage: "./assets/images/experience-page/uemf.png",
    place: "Université Euro-Méditerranéenne de Fès",
    time: "(Jun 2021 - Sep 2021)",
    desp: `
    On the campus of the <b>University of Paris Saclay</b>, I was responsible for:
    <ul>
    <li>Doing feature engineering, image pre-processing, data augmentation, transfer learning, and fine-tuning of pre-existing ImageNet model from Caffe.</li>
    <li>Worked on OpenCV and PIL libraries for Object tracking and Color detection.</li>
    <li>Built a classification model using Python, TensorFlow and Keras to train the seven architectures chosen for this project (VGG16. ResNet152, inceptionV3, Xception, inceptionResNetV2, EfficientNetB7, MobileNetV2).</li>
    <li>Region Convolutional Neural Network (R-CNN): getting 96% in classification problem and 70% in bbox problem.</li>
    <li>Faster R-CNN: getting 96% in classification problem and 52% in bbox problem.</li>
    <li> Deployment to Drone CI for using drone to capture images and detect all the plant diseases.</li>
    </ul>
    `,
  },
  {
    title: "Data Science Intern: Product Recommendation System",
    cardImage: "./assets/images/experience-page/uemf.png",
    place: "Université Euro-Méditerranéenne de Fès",
    time: "(Jul 2021 - Aug 2021)",
    desp: `
    On the campus of the <b>University of Paris Saclay</b>, I was responsible for:
    <ul>
    <li>Scraped data from e-commerce website. Used: Selenium, BeautifulSoup.</li>
    <li>Co-organising the association's annual event <b>Soirée de l'IA</b>.</li>
    <li>Developed a model to recommend the best products for the user using K-Means, KNN algorithms. Used Scikit-Learn. </li>
    <li>Developed a Dashboard for visualization. Used: Dash, Plotly.</li>
    <li>Deployement. Used: FastAPI.</li>
    </ul>
    `,
  },
];

const showCards1 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1" style="height:350px">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Rasa Developer Certification, 2024",
    cardImage:
      "./assets/images/experience-page/rasa.png",
    description: "Rasa Developer Certification.",
  },
  {
    title: "IBM Big Data Engineer, 2022",
    cardImage:
      "./assets/images/experience-page/ibm.png",
    description: "IBM Big Data Engineer.",
  },
  {
    title: "HCIA-Big Data, 2022",
    cardImage:
      "./assets/images/experience-page/huawe.png",
    description: "HCIA-Big Data.",
  },
  {
    title: "DeepLearning.AI, 2021",
    cardImage:
      "./assets/images/experience-page/deeplearning.png",
    description: "DeepLearning.AI.",
  },
  {
    title: "Getting Started with SAS Programming, 2020",
    cardImage:
      "./assets/images/experience-page/sas.jpg",
    description: "Getting Started with SAS Programming.",
  },
  {
    title: "Introduction à la programmation orientée objet (en Java), 2020",
    cardImage:
      "./assets/images/experience-page/java.jpg",
    description: "Introduction à la programmation orientée objet (en Java).",
  },

];

const showCards2 = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height:500px ;width:400px">
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "AIOX Sentiment Analysis Challenge by UmojaHack Africa, 2020",
    subtitle: "Finalist",
    image: "./assets/images/experience-page/hackaton.png",
    desp: "AIOX Sentiment Analysis Challenge by UmojaHack Africa.",
  },
  {
    title: "UmojaHack Africa: Sendy Delivery Rider Response Challenge (INTERMEDIATE), 2021",
    subtitle: "Finalist",
    image: "./assets/images/experience-page/hackaton.png",
    desp: "UmojaHack Africa: Sendy Delivery Rider Response Challenge (INTERMEDIATE)",
  },
  {
    title: "UmojaHack Africa: African Snake Antivenom Binding Challenge (ADVANCED), 2022",
    subtitle: "Finalist",
    image: "./assets/images/experience-page/hackaton.png",
    desp: "UmojaHack Africa: African Snake Antivenom Binding Challenge (ADVANCED).",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
