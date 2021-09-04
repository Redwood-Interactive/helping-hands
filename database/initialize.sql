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
  c_date TIMESTAMP NOT NULL DEFAULT current_timestamp,
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
  category VARCHAR(100) NOT NULL,
  r_date TIMESTAMP DEFAULT current_timestamp,
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
  UNIQUE(user_id),
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

CREATE INDEX auth_id_idx
ON users(auth_id);

CREATE INDEX contributions_user_id_idx
ON contributions(user_id);

CREATE INDEX request_user_id_idx
ON contributions(user_id);

CREATE INDEX photos_contributions_id_idx
ON photos(contribution_id);

CREATE INDEX locations_id_idx
ON locations(user_id);