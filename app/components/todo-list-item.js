import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TodoListItemComponent extends Component {
  @action
  finish(todo) {
    todo.status = 'done';
    todo.save();
  }

  @action
  delete(todo) {
    todo.deleteRecord();
    todo.save();
  }
}
