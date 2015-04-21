/*
 * File: app/store/OwnExercisesStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LanistaTrainer.store.OwnExercisesStore', {
    extend: 'Ext.data.Store',

    requires: [
        'LanistaTrainer.model.ExerciseModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'OwnExercisesStore',
            model: 'LanistaTrainer.model.ExerciseModel',
            proxy: {
                type: 'ajax',
                url: 'resources/data/exercises.json',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});