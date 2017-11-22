import { Template } from 'meteor/templating';
import { Querying } from '/client/imports/ui';
import { Enums } from '/client/imports/modules';
import './findone_and_delete.html';

Template.findOneAndDelete.onRendered(() => {
  Querying.initOptions(Enums.FINDONE_MODIFY_OPTIONS);

  // TODO
  // upsert and returnOriginal and upsert are not for delete
  /* if (value != Enums.FINDONE_MODIFY_OPTIONS.UPSERT && value != Enums.FINDONE_MODIFY_OPTIONS.RETURN_ORIGINAL) {
    cmb.append($('<option></option>')
      .attr('value', key)
      .text(value));
  } */
});

Template.findOneAndDelete.executeQuery = Querying.Collection.FindOneAndDelete.execute;
Template.findOneAndDelete.renderQuery = Querying.Collection.FindOneAndDelete.render;
