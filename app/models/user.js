import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import currencies from 'ember-red-green-client/constants/currencies'
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  currency: attr('string'),
  email: attr('string'),
  currencySymbol: Ember.computed('currency', function() {
    return currencies[this.get('currency')].symbol;
  })
});
