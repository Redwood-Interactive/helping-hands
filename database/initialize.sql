DROP DATABASE IF EXISTS community;

CREATE DATABASE community;

\c community

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  current_rating INTEGER DEFAULT 0,
  email VARCHAR(255) NOT NULL,
  phone BIGINT DEFAULT NULL,
  profile_pic VARCHAR(1500) DEFAULT NULL,
  auth_id VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS contributions;

CREATE TABLE contributions (
  id SERIAL,
  user_id INTEGER NOT NULL,
  title VARCHAR(200) NOT NULL,
  c_description VARCHAR(1500) NOT NULL,
  category VARCHAR(100) NOT NULL,
  c_date TIMESTAMP NOT NULL,
  condition VARCHAR(50) NOT NULL,
  available BOOLEAN NOT NULL,
  for_free BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
);

DROP TABLE IF EXISTS requests;

CREATE TABLE requests (
  id SERIAL,
  user_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  r_description VARCHAR(1500) NOT NULL,
  category INTEGER NOT NULL,
  r_date TIMESTAMP NOT NULL,
  available BOOLEAN NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
);

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id SERIAL,
  contribution_id INTEGER NOT NULL,
  photo_url VARCHAR(1500) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (contribution_id) REFERENCES contributions(id)
);

CREATE TABLE locations (
  id SERIAL,
  user_id INTEGER NOT NULL,
  street_name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zipcode INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE feedback (
  id SERIAL,
  feedback VARCHAR(500),
  PRIMARY KEY (id)
);

CREATE INDEX users_id_idx
ON users(id);

CREATE INDEX contributions_user_id_idx
ON contributions(user_id);

CREATE INDEX request_user_id_idx
ON contributions(user_id);

CREATE INDEX photos_contributions_id_idx
ON photos(contribution_id);


-- dummy data:

INSERT INTO users
(first_name,
  last_name,
  current_rating,
  email,
  phone,
  profile_pic,
  auth_id
) VALUES (
  'lost',
  'soul',
  5,
  'lostsoul25@gmail.com',
  7862501234,
  'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
  'thisisdummyauth'
);


INSERT INTO contributions
(user_id,
title,
c_description,
category,
c_date,
condition,
available,
for_free
) VALUES (
  1,
  'Truck Tire',
  'I will let go my favorite truck tire to someone who will better use it',
  'furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);

INSERT INTO contributions
(user_id,
title,
c_description,
category,
c_date,
condition,
available,
for_free
) VALUES (
  1,
  'Truck Tire',
  'I will let go my favorite truck tire to someone who will better use it',
  'furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);

INSERT INTO contributions
(user_id,
title,
c_description,
category,
c_date,
condition,
available,
for_free
) VALUES (
  1,
  'Truck Tire',
  'I will let go my favorite truck tire to someone who will better use it',
  'furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);


INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  1,
  'https://www.macanforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.macanforum.com/attachments/1-jpg.235664/'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  2,
  'https://www.macanforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.macanforum.com/attachments/1-jpg.235664/'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  3,
  'https://www.macanforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.macanforum.com/attachments/1-jpg.235664/'
);



/*

script: npm run buildDB to drop dabase, create the DB and insert dummy data.


psql katielaw  -h 127.0.0.1 -d test -f database/initialize.sql

psql justincase -h 127.0.0.1 -d community -f database/initialize.sql

// new insert user format

WITH userid AS (
  INSERT INTO users (first_name, last_name, current_rating, email, phone, profile_pic, auth_id)
  VALUES ('katie', 'law', 5, 'cactus@gmail.com', 7185559922, 'https://unsplash.com/photos/sLGYaQ_stMM', '114799463748278374395') RETURNING id
  )

  INSERT INTO locations (user_id, street_name, city, state, zipcode)
  SELECT id, '567 sahara avenue', 'oasis city', 'DS', 47749
  FROM userid

*/