Page({
  handlePopulation(){
    const {
      BASE_URL,
      API_KEY
    } = getApp()

    const country = 'Japan'

    const URL = `${BASE_URL}/population?country=${country}`

    my.request({
      url: URL,
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      },
      contentType: 'application/json',

      success: function(response){
        console.log('Response : ', response);
      },
      fail: function(response){
        console.log('Echec de la requête');
      }
    });
  }
});
