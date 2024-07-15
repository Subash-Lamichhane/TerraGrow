 --- MindsDB ships with a filesystem database called 'files'
--- Each file you uploaded is saved as a table there.
---
--- You can always check the list tables in files as follows:

SHOW TABLES FROM files;

--- These files can be queried as tables,
--- You just uploaded subash

SELECT * FROM files.subash LIMIT 10;

-- DROP MODEL crop_predictor;
CREATE PREDICTOR mindsdb.crop_predictor
FROM files
(SELECT * from subash LIMIT 10000)
PREDICT label_encoded;

SELECT status
FROM mindsdb.models
WHERE name='crop_predictor';

DESCRIBE crop_predictor;

DESCRIBE mindsdb.crop_predictor.features;

DESCRIBE mindsdb.crop_predictor.model;

SELECT label_encoded, label_encoded_explain
FROM mindsdb.crop_predictor
WHERE N = 85
AND P = 58
AND K = 41
AND temperature = 21.77046169
AND humidity = 80.31964408
AND ph = 7.038096361
AND rainfall = 226.6555374;