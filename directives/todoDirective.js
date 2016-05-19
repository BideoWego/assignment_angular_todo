// ----------------------------------------
// Todo Directive
// ----------------------------------------

Todo.directive('todo', function() {
  return {
    templateUrl: '/templates/todo.html',
    restrict: 'A',
    scope: {
      todo: '=',
      destroyTodo: '&'
    }
  };
});

