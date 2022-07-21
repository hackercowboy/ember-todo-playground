import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class TodoListComponent extends Component {
  @service store;
  @tracked todos = [];

  constructor() {
    super(...arguments);
    this.loadTodos();
  }

  async loadTodos() {
    this.todos = await this.store.findAll('todo');
  }
}
