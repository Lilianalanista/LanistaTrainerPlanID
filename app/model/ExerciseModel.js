/*
 * File: app/model/ExerciseModel.js
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

Ext.define('LanistaTrainer.model.ExerciseModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'name_EN'
        },
        {
            name: 'name_ES'
        },
        {
            name: 'name_DE'
        },
        {
            name: 'ext_id'
        },
        {
            type: 'int',
            name: 'type'
        },
        {
            name: 'coatchingnotes_DE'
        },
        {
            name: 'coatchingnotes_ES'
        },
        {
            name: 'coatchingnotes_EN'
        },
        {
            name: 'mistakes_DE'
        },
        {
            name: 'mistakes_ES'
        },
        {
            name: 'mistakes_EN'
        },
        {
            type: 'int',
            name: 'muscle'
        },
        {
            type: 'int',
            name: 'addition'
        }
    ]
});