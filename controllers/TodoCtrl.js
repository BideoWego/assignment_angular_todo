// ----------------------------------------
// TodoCtrl
// ----------------------------------------

var TodoCtrl = Todo.controller('TodoCtrl',
  ['$scope', 'todoService',
  function($scope, todoService) {

    $scope.todos = todoService.all();
    $scope.name = '';
    $scope.date = new Date();
    $scope.toggleCompletedText = todoService.getToggleCompletedText();

    $scope.createTodo = function() {
      todoService.create($scope.name, $scope.date);
      $scope.name = '';
      $scope.date = new Date();
    };


    $scope.destroyTodo = function(todoId) {
      todoService.destroy(todoId);
    };


    $scope.toggleCompleted = function() {
      todoService.toggleCompleted();
      $scope.toggleCompletedText = todoService.getToggleCompletedText();
      $scope.hideCompleted = todoService.getHideCompleted();
    };


    $scope.clearCompleted = function() {
      todoService.clearCompleted();
    };

  }]);


