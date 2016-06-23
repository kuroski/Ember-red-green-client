import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from '../config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.serverURL,
  namespace: ENV.apiNameSpace, //optional (for namespaced APIs)
  pathForType (type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
