// ----------------------------------------
// TodoCtrl
// ----------------------------------------

var TodoCtrl = Todo.controller('TodoCtrl',
  ['$scope',
  function($scope) {

    $scope.todos = SEEDS;
    $scope.name = '';
    $scope.date = new Date();


    $scope.createTodo = function() {
      var todo = {
        name: $scope.name,
        date: new Date($scope.date).toDateString()
      };

      $scope.todos.push(todo);

      $scope.name = '';
      $scope.date = new Date();
    };


    $scope.destroyTodo = function(todoId) {
      $scope.todos.splice(todoId, 1);
    };


    $scope.toggleHideCompleted = function() {
      $scope.hideCompleted = !$scope.hideCompleted;
    };


    $scope.clearCompleted = function() {
      for (var i = 0; i < $scope.todos.length; i++) {
        var todo = $scope.todos[i];
        if (todo.completed) {
          $scope.destroyTodo(i);
        }
      }
    };

  }]);


