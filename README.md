# OculoCardia AI — RetinaHeart AI: Retinal Heart Prediction

OculoCardia AI is a full-stack AI-assisted retinal analysis and cardiovascular risk research prototype that explores how retinal image processing, deep learning, vessel analysis, and generative AI can be combined into a practical web application.

The system analyzes retinal fundus images, applies image-processing and machine-learning techniques, produces an experimental risk assessment, and provides an AI-assisted prevention guidance experience.

**Project Status:** Academic/research prototype. OculoCardia AI is not a medical diagnostic device and its predictions should not be used for clinical diagnosis or treatment decisions.

## ✨ Features

### 👁️ Retinal Image Analysis

- Upload retinal fundus images for analysis
- Green-channel retinal image processing
- CLAHE-based contrast enhancement
- Retinal vessel analysis
- Vessel-mask processing
- Fractal-dimension analysis
- AVR-related feature calculation

### 🧠 Deep Learning Risk Classification

- ResNet-50 transfer-learning architecture
- PyTorch-based model pipeline
- Binary retinal-risk classification experiment
- Stratified dataset splitting
- Model evaluation and classification metrics

### 📊 Experimental Risk Assessment

The application combines extracted retinal features and model output to produce an experimental risk assessment.

Risk categories presented by the application include:

- Low Risk
- Medium Risk
- High Risk

The assessment is intended for research and educational exploration rather than clinical use.

### 🤖 AI Assistant

The application includes a Gemini-powered conversational assistant for contextual information related to the analysis and prevention guidance.

### 🛡️ Authentication Infrastructure

The project includes authentication components using:

- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- SQLite user storage

### 📈 Dashboard

The frontend provides a dashboard experience for presenting:

- Analysis results
- Risk information
- Prevention guidance
- User-related information

### 📄 PDF Reporting

- Generate analysis results as PDF
- Present risk information and supporting analysis in a shareable report format

## 🧠 AI & Computer Vision Pipeline

The core workflow combines retinal image processing with machine learning.

```
Retinal Fundus Image
        │
        ▼
Image Preprocessing
        │
        ├── Green Channel Extraction
        └── CLAHE Enhancement
        │
        ▼
Retinal Feature Analysis
        │
        ├── Vessel Mask Processing
        ├── Vessel Features
        ├── Fractal Dimension
        └── AVR-related Features
        │
        ▼
Deep Learning Model
        │
        └── ResNet-50
        │
        ▼
Experimental Risk Assessment
        │
        ├── Low Risk
        ├── Medium Risk
        └── High Risk
        │
        ▼
Results & Prevention Guidance
        │
        ├── Dashboard
        ├── PDF Report
        └── AI Assistant
```

**Note:** Some components in the current prototype use simulated or experimental processing rather than clinically validated segmentation or explainability methods. These components should not be interpreted as clinical-grade systems.

## 🔬 Image Processing

### Green-Channel Extraction

The green channel of the retinal image is used as an intermediate representation for vessel-oriented processing.

### CLAHE Enhancement

Contrast Limited Adaptive Histogram Equalization (CLAHE) is applied to improve local contrast and make retinal structures more suitable for downstream processing.

### Vessel Analysis

The application processes retinal vessel information to derive features used by the experimental risk-scoring pipeline.

The current implementation includes vessel-mask processing and feature calculations, but these should be regarded as prototype/research components rather than clinically validated vessel segmentation.

### Fractal Dimension

Fractal-dimension analysis is used as an experimental feature for characterizing retinal vascular structure.

### AVR-Related Analysis

The project calculates an AVR-related feature as part of the experimental risk pipeline.

This feature should not be interpreted as a clinically validated measurement because the current implementation contains prototype-level estimation and simulation.

## 🤖 Deep Learning Model

### ResNet-50 Transfer Learning

The main classification model is based on ResNet-50 using transfer learning with PyTorch.

The training pipeline includes:

- ResNet-50 backbone
- Custom classification head
- Retinal image preprocessing
- Image resizing to 224 × 224
- ImageNet normalization
- Stratified dataset splitting
- Model evaluation

### Dataset Split

The training workflow uses:

| Split | Percentage |
|-------|-----------|
| Training | 70% |
| Validation | 15% |
| Testing | 15% |

The model training process uses a stratified split to preserve class distribution across the datasets.

### Binary Risk Classification

The underlying retinal classification experiment maps the dataset into two model classes:

- Class 0       → Low Risk
- Classes 1–4   → Higher Risk

The application then combines the model output with its feature-based risk pipeline to present user-facing risk categories.

This classification setup is an experimental research implementation and is not clinically validated.

## 📈 Model Evaluation

The project includes evaluation artifacts for assessing the trained model, including:

- Accuracy
- ROC-AUC
- Precision
- Recall
- F1-score
- Confusion matrix
- Classification report
- ROC curve

See `ml/evaluate_final.py` and the evaluation artifacts in `ml/plots/`.

Model metrics should be reported from the reproducible evaluation artifacts rather than treated as clinical performance measures.

## 🧮 Experimental Risk Scoring

The application combines retinal features into an experimental risk score.

The current scoring formulation uses:

```
Risk Score =
    (0.6 × AVR-related Risk)
  + (0.4 × Tortuosity-related Risk)
```

The resulting score is mapped into application-level categories:

- < 30%       → Low Risk
- 30%–70%     → Medium Risk
- > 70%       → High Risk

These thresholds are application-specific research/prototype rules and are not medical risk thresholds.

## 🏗️ System Architecture

```
                     OculoCardia AI
                           │
           ┌───────────────┴───────────────┐
           │                               │
     React + Vite                       FastAPI
      Frontend                          Backend
           │                               │
           │                    ┌──────────┴──────────┐
           │                    │                     │
           │             Image Processing       ML Pipeline
           │                    │                     │
           │             Risk Analysis          ResNet-50
           │                    │
           │             Authentication
           │
           └──────────── HTTP / JSON ────────────────┘
                                            │
                                            ▼
                                     SQLite Database
```

## 🔄 Application Workflow

```
User Registration / Login
          │
          ▼
Upload Retinal Image
          │
          ▼
Image Preprocessing
          │
          ▼
Retinal Feature Analysis
          │
          ▼
ResNet-50 Prediction
          │
          ▼
Experimental Risk Score
          │
          ▼
Results Page
          │
     ┌────┴───────────────┐
     │                    │
     ▼                    ▼
Prevention Guidance    PDF Report
     │                    │
     └────────┬───────────┘
              ▼
         AI Assistant
              │
              ▼
          Dashboard
```

## 🛠️ Technology Stack

| Area | Technology |
|------|-----------|
| Frontend | React, Vite |
| Backend | Python, FastAPI |
| Deep Learning | PyTorch, ResNet-50 |
| Computer Vision | OpenCV |
| Image Processing | CLAHE, Green-Channel Processing |
| Scientific Computing | NumPy, scikit-image |
| Data Processing | Pandas |
| Authentication | JWT, bcrypt |
| Database | SQLite |
| AI Assistant | Gemini API |
| Reporting | jsPDF |
| API Communication | REST / JSON |

## 📁 Project Structure

```
retinal-heart-prediction/
│
├── backend/
│   ├── main.py
│   ├── utils.py
│   ├── auth.py
│   ├── database.py
│   ├── check_app_db.py
│   ├── check_users.py
│   ├── reset_db.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatWidget.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Prevention.jsx
│   │   └── ...
│   └── package.json
│
├── ml/
│   ├── train_model.py
│   ├── evaluate_final.py
│   └── plots/
│
├── models/
│   └── cardio_risk_model.h5
│
├── data/
│   └── datasets/
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

Large datasets, trained model artifacts, and sensitive/local configuration are intentionally excluded from the public repository.

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Python 3.10+
- Node.js 18+
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sandrafiona-dev/OculoCardia-AI.git
cd OculoCardia-AI
```

### 2. Backend Setup

Create a Python virtual environment:

```bash
python -m venv venv
```

**Windows:**
```bash
venv\Scripts\activate
```

**Linux/macOS:**
```bash
source venv/bin/activate
```

Install the backend dependencies:

```bash
pip install -r backend/requirements.txt
```

### 3. Environment Configuration

Create: `backend/.env`

Configure the required environment variables locally, including the Gemini API key used by the AI assistant.

Example:

```
GEMINI_API_KEY=your_api_key_here
JWT_SECRET=your_secure_secret_here
```

Never commit API keys, database credentials, private datasets, or other sensitive information to Git.

### 4. Start the Backend

From the project root:

```bash
uvicorn main:app --reload --app-dir backend
```

The FastAPI backend will be available at:

```
http://127.0.0.1:8000
```

Health check:

```
http://127.0.0.1:8000/healthz
```

### 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local development URL in the terminal.

## 📊 Dataset & Model Assets

The project uses retinal-image datasets and trained model artifacts that are not fully included in the public repository because of file size and data-sensitivity considerations.

The training and evaluation pipeline is designed around retinal image classification and includes:

- Dataset preprocessing
- Stratified train/validation/test splitting
- Transfer-learning model training
- Model evaluation
- Classification metrics
- ROC analysis

The primary trained model is a ResNet-50-based retinal risk classifier.

Dataset access, redistribution rights, and patient/privacy considerations should be reviewed before sharing or deploying any retinal-image dataset.

## 🔐 Security & Privacy

Retinal images and account information can contain sensitive data.

The project includes authentication and environment-based configuration components.

For deployment:

- Keep API keys outside source control
- Keep private datasets outside the public repository
- Do not commit user-uploaded medical images
- Use secure production secrets
- Apply appropriate access controls
- Protect stored prediction and user data
- Review database security before production deployment

## ⚠️ Research Disclaimer

OculoCardia AI is an academic/research prototype created to explore AI-assisted retinal image analysis.

It is not a medical diagnostic device.

The risk categories, feature calculations, model predictions, and prevention guidance are experimental and should not be interpreted as medical advice, diagnosis, prognosis, or treatment recommendations.

Any real-world clinical application would require:

- Appropriate clinical validation
- Representative and sufficiently large datasets
- Independent evaluation
- Regulatory review
- Privacy and security safeguards
- Qualified medical oversight

## 📚 Documentation

Additional technical material and project documentation are available within the repository, including model-training and evaluation resources.

The project demonstrates the integration of:

- Computer Vision
- Deep Learning
- Medical-image processing
- PyTorch
- FastAPI
- React
- Authentication
- SQLite
- Generative AI
- PDF reporting

## 📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.
