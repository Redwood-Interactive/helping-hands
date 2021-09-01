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
  condition VARCHAR(50) NOT NULL,
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
  'Used',
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
  'Truck Tire Smoothie',
  'I will let go my favorite truck tire to someone who will better use it',
  'Drink',
  CURRENT_TIMESTAMP,
  'Like new',
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
  'Truck Tire Trousers',
  'I will let go my favorite truck tire to someone who will better use it',
  'Clothing',
  CURRENT_TIMESTAMP,
  'New',
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
  'Star Wars Toys',
  'I am teaching my child a lesson. Giving his toys away.',
  'Toy',
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
  'Will mow lawn',
  'I like mowing lawns.',
  'Service',
  CURRENT_TIMESTAMP,
  'New',
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
  'Smart phone',
  'Works as intended',
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
  'Beer',
  'Leftover beer from a party',
  'Drink',
  CURRENT_TIMESTAMP,
  'New',
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
  'Couch',
  'May have bed bugs',
  'Furniture',
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
  'Baseball glove and bat - no ball',
  'Some baseball gear from my childhood',
  'Toy',
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
  'Radio with AM/FM',
  'Needs power through outlet',
  'Electronic',
  CURRENT_TIMESTAMP,
  'Like new',
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
  'Powerless Treadmill',
  'No need for power - just run',
  'Miscellaneous',
  CURRENT_TIMESTAMP,
  'Like new',
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
  'Sandwiches from Subway',
  'Eat fresh - limited quantity',
  'Food',
  CURRENT_TIMESTAMP,
  'New',
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
  'Winter socks',
  'Protect yourself from the Winter chills',
  'Clothing',
  CURRENT_TIMESTAMP,
  'New',
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
  'Someone to talk to',
  'I am here for you. Tell me anything',
  'Service',
  CURRENT_TIMESTAMP,
  'New',
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
  'Skateboard',
  'Barely used skateboard - works perfectly',
  'Toy',
  CURRENT_TIMESTAMP,
  'Like new',
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
  'Herman Miller Aeron',
  'A little worn but perfect for sitting on all day',
  'Furniture',
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
  'Grannys Homemade Cookies',
  'Feel at home with fresh-baked cookies (Limited quantity)',
  'Food',
  CURRENT_TIMESTAMP,
  'New',
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
  'Car',
  'Got a new car - dont need this one anymore',
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
  'https://www.chicagotribune.com/resizer/Jv5JyfaB2elvH-Xk1w2asBMmWDk=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/3VNKYVLWXJENRDVOMFMBJXGXOA.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  7,
  'https://i.ytimg.com/vi/bNeHrICcWEE/maxresdefault.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  8,
  'https://www.gannett-cdn.com/presto/2021/06/01/USAT/518a34c3-56c4-495a-a0ca-7a8542c51c6b-B04_iphone_25.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  9,
  'https://spontaneousorder.in/wp-content/uploads/2016/06/beer-india.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  10,
  'https://petdogowner.com/wp-content/uploads/2020/12/AdobeStock_254363718-scaled.jpeg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  11,
  'https://upload.wikimedia.org/wikipedia/commons/d/db/Baseball_glove_front.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  11,
  'https://s.yimg.com/os/creatr-uploaded-images/2020-08/6f263270-e65e-11ea-b2d9-45c703827d93'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  12,
  'https://www.amateur-radio-wiki.net/wp-content/uploads/2020/11/best-am-fm-radio-with-cd-player.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  13,
  'https://images.offerup.com/65NxkadUr_6R9fBiqaduUNz0wSs=/800x600/0e4f/0e4ffe639b7b40ed99fa989b0e192d09.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  14,
  'https://pbs.twimg.com/media/DIToFqFW0AADv5G.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  15,
  'https://preview.redd.it/d5qs929e45gz.jpg?auto=webp&s=6450fc105fca7f56cf587a34bc43c46e3554980f'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  16,
  'https://a1-images.myspacecdn.com/images03/33/2fcf8d796bd94d7a9ef7f4dae774abee/600x600.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  17,
  'https://kslsports.com/wp-content/uploads/2020/05/GettyImages-51076455-768x432.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  18,
  'https://www.continentalofficegroup.net/wp-content/uploads/2020/08/Herman-Miller-Aeron-Chairs-a-scaled.jpg'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  19,
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj7OUZyys1OmWr-ply7HHLPr3Kaf3rAfEGzv6H-8V0wHFzr4JEyW2QVDruOS-BCK-HtS0&usqp=CAU'
);

INSERT INTO photos
(
  contribution_id,
  photo_url
) VALUES (
  20,
  'https://images.hgmsites.net/lrg/2013-tesla-model-s-photo-by-owner-gene-rubin_100494936_l.jpg'
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



INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  1,
  'Need ski boots',
  'mine are really bad',
  'Electronic',
  'Used',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  1,
  'Need water',
  'its hot outside, im dehydrated',
  'Drink',
  'Like new',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  1,
  'Need socks',
  'mine have holes in them',
  'Clothing',
  'Used',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  2,
  'Need socks',
  'mine have holes in them',
  'Clothing',
  'Used',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  3,
  'Need socks',
  'mine have holes in them',
  'Clothing',
  'Like new',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  3,
  'Need a sandwich',
  'its lunch time, feeling pretty hungry',
  'Food',
  'Used',
  CURRENT_TIMESTAMP,
  TRUE

);

INSERT INTO requests
(
  user_id,
  title,
  r_description,
  category,
  condition,
  r_date,
  available
) VALUES (
  3,
  'Need help moving',
  'moving to a new place, need some strong people!',
  'Service',
  'New',
  CURRENT_TIMESTAMP,
  TRUE
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

UPDATE users SET first_name = cactus WHERE id = 5



INSERT INTO photos (contribution_id, photo_url) VALUES (2, 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')



`WITH ins AS (UPDATE users
        SET first_name = ($1)
            last_name = ($2)
            email = ($3)
            phone = ($4)
            profile_pic = ($5)
        WHERE id = ($6)
        )
        INSERT INTO locations (user_id, street_name, city, state, zipcode) VALUES ($6, $7, $8, $9, $10)
        ON CONFLICT (user_id)
        DO
        UPDATE SET user_id = ($6)
                   street_name = ($7)
                   city = ($8)
                   state = ($9)
                   zipcode = ($10)
        `
*/