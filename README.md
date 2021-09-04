
# Helping Hands

Helping Hands is a full-stack application that provides a platform to help those in need.
Users can contribute or request items and services. 

Deployed on Heroku: https://helping-hands-redwood.herokuapp.com/

## Preview

![image](https://i.imgur.com/UOjt1PU.png)



## Tech Stack
 
**Client:** React, Styled-components, React-bootstrap, Axios
 
**Server:** Node, Express, Passport.js
 
**Database:** PostgreSQL

  
## Installation
 
Install Helping hands with npm
 
```bash
 git clone https://github.com/Redwood-Interactive/helping-hands.git
 cd helping-hands
 npm install 
 npm run buildDB 
 npm run watch
```

    
## API Reference

#### Post feedback
 
```http
 POST /feedback
```
 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `feedback`      | `string` | **Required**. Feedback to be posted to database |


#### Post a new request
 
```http
 POST /requestsAll
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `number` | **Required**. ID of the user |
| `title`      | `string` | **Required**. Title of the request |
| `r_description`      | `string` | **Required**. Description of the request |
| `category`      | `string` | **Required**. Category of the request |
| `available`      | `boolean` | **Required**. Availability of the request |

#### Post a new contribution
 
```http
 POST /getcontributions
```
| Parameter |     Type     | Description                       |
| :-------- |    :------- | :------------------------------------------------- |
| `user_id`      | `number` | **Required** Corresponding user id from users table |
| `title`        | `string` | **Required** Title of the contribution |
| `c_description`| `string` | **Required** Extended description of the product  |
| `category`     | `string` | **Required** Category of the item from the dropdown menu |
| `condition`    | `string` | **Required** Category of the item from the dropdown menu |
| `for_free`     | `boolean` | **Required** 1= item is free / 2= item is not free |
| `image`        | `string` | **Required** String url of the hosted image. |

#### Get total number of requests
 
```http
 GET /getAllReqCount
```

#### Get all requests
 
```http
 GET /requestsAll
```

#### Get all contributions
 
```http
 GET /getcontributions
```


  
## Authors
 
- [@Jcase22](https://github.com/Jcase22)
- [@jpbust](https://www.github.com/jpbust)
- [@katscap](https://www.github.com/katscap)
- [@Gumcer](https://github.com/Gumcer)
- [@SeijiMatsumoto](https://www.github.com/SeijiMatsumoto)
- [@SandraM1](https://github.com/SandraM1)
- [@juneisenuj](https://www.github.com/juneisenuj)
## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

  