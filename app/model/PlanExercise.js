/*
 * File: app/model/PlanExercise.js
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

Ext.define('LanistaTrainer.model.PlanExercise', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Number',
        'Ext.data.field.Date'
    ],
    uses: [
        'LanistaTrainer.model.Plan'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'int',
            name: 'exercise_id'
        },
        {
            name: 'user_exercise_id'
        },
        {
            type: 'int',
            name: 'plan_id',
            reference: 'LanistaTrainer.model.Plan'
        },
        {
            type: 'int',
            name: 'position'
        },
        {
            type: 'int',
            name: 'duration'
        },
        {
            type: 'string',
            name: 'description'
        },
        {
            type: 'float',
            name: 'weight_min'
        },
        {
            type: 'float',
            name: 'weight_max'
        },
        {
            type: 'float',
            name: 'rounds_min'
        },
        {
            type: 'float',
            name: 'rounds_max'
        },
        {
            type: 'float',
            name: 'training_min'
        },
        {
            type: 'float',
            name: 'training_max'
        },
        {
            type: 'int',
            name: 'training_unit'
        },
        {
            type: 'string',
            name: 'unit_text'
        },
        {
            type: 'string',
            name: 'exercise_name_DE'
        },
        {
            type: 'string',
            name: 'exercise_name_EN'
        },
        {
            type: 'string',
            name: 'exercise_name_ES'
        },
        {
            type: 'string',
            name: 'exercise_ext_id'
        },
        {
            name: 'day'
        },
        {
            type: 'date',
            name: 'last_update'
        }
    ]
});