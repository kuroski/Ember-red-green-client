import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  sessionAuthenticated() {
    this._super(...arguments); 
    // for keeping the defaults (attempted transition, routeAfterAuth config etc..)
    this.loadUser();
  },
  loadUser: function() {
    if (this.get('session.isAuthenticated')) {
      this.store.findRecord('user', 'me').then (user => {
        this.set('session.currentUser', user);
      });
    }
  },
  beforeModel() {
    this.loadUser();
  }
});
