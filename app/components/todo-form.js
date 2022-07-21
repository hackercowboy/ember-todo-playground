import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoFormComponent extends Component {
  @tracked text = '';
  @service store;

  @action
  submit() {
    this.store
      .createRecord('todo', { text: this.text, status: 'pending' })
      .save();
    this.text = '';
  }
}
