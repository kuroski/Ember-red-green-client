import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },
  beforeModel(transition) {
    // trigger AuthenticatedRouteMixin's beforeModel
    this._super(...arguments);

    if (transition.targetName === 'dashboard.index') {
      transition.abort();
      this.transitionTo('dashboard.overview');
    }
  },
  model() {
    /*return Ember.RSVP.hash({
      balanceChanges: this.store.findAll('balance-change'),
      categories: this.store.query('category', { filter: {period: params.period }})
    });*/
    return this.store.findAll('balance-change');
  }
});
