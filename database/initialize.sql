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


INSERT INTO users
(first_name,
  last_name,
  current_rating,
  email,
  phone,
  profile_pic,
  auth_id
) VALUES (
  'Han',
  'Solo',
  3,
  'chewyImissYou@gmail.com',
  7861201234,
  'https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg',
  'thisissdyauth'
);

INSERT INTO users
(first_name,
  last_name,
  current_rating,
  email,
  phone,
  profile_pic,
  auth_id
) VALUES (
  'Chewbacca',
  'Wookie',
  5,
  'RAWRGWAWGGR@gmail.com',
  1861201234,
  'https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20210106001220',
  'thisisdumsaauth'
);



--1
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
  'Furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);

--2
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
  'Furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);
--3
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
  'Furniture',
  CURRENT_TIMESTAMP,
  'used',
  TRUE,
  TRUE
);

--4
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
  2,
  'Wookie shoes',
  'Like barefoot',
  'Clothing',
  CURRENT_TIMESTAMP,
  'New',
  TRUE,
  TRUE
);

--5
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--6
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--7
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);


--8
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--9
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--10
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--11
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--12
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--13
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
  3,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--14
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
  2,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--15
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
  3,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--16
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
  2,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--17
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
  3,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--18
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
  2,
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--19
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
  TRUE,
  TRUE
);

--20
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
  'Old ship, some minor dents',
  'Runs like a charm, never laser damaged',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Used',
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
  1,
  'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
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

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  4,
  'https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/055/890/580/original/695245_01.jpg.jpeg?1623423928'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  4,
  'https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/055/890/575/original/695245_03.jpg.jpeg?1623423925'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  5,
  'https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/055/890/575/original/695245_03.jpg.jpeg?1623423925'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  5,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  6,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  6,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  7,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  8,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  9,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  10,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  11,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  12,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  13,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  14,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  15,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  16,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  17,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  18,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  19,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  20,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  20,
  'https://cdnb.artstation.com/p/assets/images/images/016/831/819/large/jack-uglow-falcon-01.jpg?1553636553'
);


INSERT INTO locations
(
  user_id,
  street_name,
  city,
  state,
  zipcode
) VALUES (
  1,
  '1100 Congress Ave',
  'Austin',
  'TX',
  78701
);

INSERT INTO locations
(
  user_id,
  street_name,
  city,
  state,
  zipcode
) VALUES (
  2,
  '1540 Broadway',
  'New York',
  'NY',
  10036
);

INSERT INTO locations
(
  user_id,
  street_name,
  city,
  state,
  zipcode
) VALUES (
  3,
  '3504 34th St',
  'Lubbock',
  'TX',
  79410
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




INSERT INTO photos (contribution_id, photo_url) VALUES (2, 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')

*/