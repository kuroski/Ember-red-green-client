import Ember from 'ember';
import BalanceChangePropertiesMixin from 'ember-red-green-client/mixins/balance-change-properties';

export default Ember.Controller.extend(BalanceChangePropertiesMixin, {
  actions: {
    delete(balanceChange) {
      if (confirm("Are you sure?")) {
        balanceChange.destroyRecord().then(() => {
          this.send('refreshRoute')
        });
      }
    }
  }
});
