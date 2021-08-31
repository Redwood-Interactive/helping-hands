import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const postFeedback = (feedback) => {
  var data = JSON.stringify({
    "feedback": feedback
  });

  var config = {
    method: 'post',
    url: `${baseUrl}/feedback`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}

const postContribution = (contribution) => {
  var data = JSON.stringify(contribution)

  var config = {
    method: 'post',
    url: `${baseUrl}/getcontributions`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}



const apiCalls = {
  postFeedback: postFeedback,
  postContribution: postContribution,
}

export default apiCalls;