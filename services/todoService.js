// --------------------------------------------
// Todo Service
// --------------------------------------------

Todo.factory('todoService', function() {

  var service = {},
      _hideCompleted = false,
      _todos = SEEDS,
      _toggleCompletedText = 'Hide Completed';

  service.all = function() {
    return _todos;
  };
  

  service.getToggleCompletedText = function() {
    return _toggleCompletedText;
  };


  service.getHideCompleted = function() {
    return _hideCompleted;
  };


  service.create = function(name, date) {
    _todos.push({
      name: name,
      date: new Date(date).toDateString()
    });
  };


  service.destroy = function(id) {
    _todos.splice(id, 1);
  };


  service.toggleCompleted = function() {
    _hideCompleted = !_hideCompleted;
    _toggleCompletedText = _hideCompleted ? 'Show' : 'Hide';
    _toggleCompletedText += ' Completed';
  };


  service.clearCompleted = function() {
    for (var i = 0; i < _todos.length; i++) {
      var todo = _todos[i];
      if (todo.completed) {
        service.destroy(i);
      }
    }
  };


  return service;
});



