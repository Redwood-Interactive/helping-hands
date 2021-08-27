DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  current_rating INTEGER DEFAULT 0,
  email VARCHAR(255) NOT NULL,
  phone INT NOT NULL,
  u_location VARCHAR(200) NOT NULL,
  profile_pic VARCHAR(1500) DEFAULT NULL,
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
  c_location VARCHAR(255) NOT NULL,
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
  r_location VARCHAR(200) NOT NULL,
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
  FOREIGN KEY (contribution_id) REFERENCES contribution(id)
);

CREATE INDEX users_id_idx
ON users(id);

CREATE INDEX contributions_user_id_idx
ON contributions(user_id);

CREATE INDEX request_user_id_idx
ON contributions(user_id);

CREATE INDEX photos_contributions_id_idx
ON photos(contribution_id);

/*

psql justincase  -h 127.0.0.1 -d testing -f database/initialize.sql



INSERT INTO users (first_name, last_name, current_rating, email, phone, u_location, profile_pic) VALUES ('justin', 'case', 4, 'example@email.com', 1234567890, 'hello', 'this is a profile pic')
*/