## INSTALLATION
For installation follow following steps:
#### Clone the Repository

```bash
git clone https://github.com/Subash-Lamichhane/TerraGrow.git
```
#### Run Docker
- Install docker on from [here](https://www.docker.com/)
- Run the command to create Docker container for MindsDB lightwood:
```bash
docker run --name mindsdb_container_lightwood -p 47334:47334 -p 47335:47335 mindsdb/mindsdb:lightwood
```
#### Upload Dataset
<p align="center">
      <img src="https://github.com/user-attachments/assets/e908eafb-2d37-4a97-851e-76bffc794c34" alt="Dataset Import" width="700">
</p>

- Navigate to MindsDB GUI: http://localhost:47334/.
- Upload Dataset by clicking ```Add``` button.

- Check Dataset
```sql
SHOW TABLES FROM files;

SELECT * FROM files.Crop_recommendation LIMIT 10;
```

#### Train Model
- Train MindsDB prediction model by using:
```sql
CREATE PREDICTOR mindsdb.crop_predictor
FROM files
(SELECT * from Crop_recommendation LIMIT 10000)
PREDICT label_encoded;
```
<p align="center">
      <img src="https://github.com/user-attachments/assets/9402c018-f5f0-4602-9e79-4704c4ac9fd9" alt="Train Model" width="700">
</p>

#### Test Model
- Check status and describe model.

```sql
SELECT status
FROM mindsdb.models
WHERE name='crop_predictor';

DESCRIBE crop_predictor;
```
- Predict

```sql
SELECT label_encoded, label_encoded_explain
FROM mindsdb.crop_predictor
WHERE N = 85
AND P = 58
AND K = 41
AND temperature = 21.77046169
AND humidity = 80.31964408
AND ph = 7.038096361
AND rainfall = 226.6555374;
```

<p align="center">
      <img src="https://github.com/user-attachments/assets/eeb1da32-4f99-443c-90be-93441b1ec3d1" alt="Test Model" width="700">
</p>

#### Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd TerraGrow/frontend
yarn
```

Start the development server:

```bash
yarn run dev
```

#### Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd ../backend
yarn
```

Set up the environment variables by creating a `.env` file in the backend directory and add given details:

```bash
PORT=3000
MINDSDB_API_URL=http://127.0.0.1:47334/api/projects/mindsdb/models/crop_predictor/predict
```

Start the backend server:

```bash
yarn run dev
```