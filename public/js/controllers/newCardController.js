app.controller('NewCardController', function($scope, FlashCardsFactory, $http) {
  $scope.categories = FlashCardsFactory.categories;


  //console.dir($scope);

  $scope.postCard = {
    submit: function(form) {
      console.dir($scope);
      if (form.$valid) {
        $http.post('/cards/', $scope.newCard).then(function(response) {
          console.log(response);
        });
      } else {
        alert('ERROR');
      }
    }
  };


  $scope.newCard = {
    question: null,
    category: null,
    answers: [{
      text: null,
      correct: false
    }, {
      text: null,
      correct: false
    }, {
      text: null,
      correct: false
    }]
  };
});
