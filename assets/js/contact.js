function sendEmail(e) {
  e.preventDefault();

  const POST_URL = '1PQ-3ysZzPQ8ZbnTAwBErKahW1O1Thl9Xfe8orvsiZKzS8DuG7qU5cAz5';

  const postRequest = {
    name: e.target['name-field'].value,
    email: e.target['email-field'].value,
    email: e.target['tel-field'].value,
    body: e.target['message-field'].value
  };

  if(POST_URL) {
    $.post(POST_URL, JSON.stringify(postRequest))
      .then(res => {

        e.target.reset();
        $('#alert-field')
          .removeClass()
          .addClass(`alert alert-${res.code}`)
          .text(res.msg);
      });

    $('#alert-field')
      .removeClass()
      .html('<progress></progress>')
      .removeClass('hidden');
  } else {
    alert('You must set the POST_URL variable with your script ID');
  }

}
