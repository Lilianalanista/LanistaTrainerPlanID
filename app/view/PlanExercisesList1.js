/*
 * File: app/view/PlanExercisesList1.js
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

Ext.define('LanistaTrainer.view.PlanExercisesList1', {
    extend: 'Ext.view.View',
    alias: 'widget.planExercisesList',

    requires: [
        'Ext.XTemplate'
    ],

    autoScroll: true,
    cls: 'lanista-exercise-planpanel',
    height: 250,
    itemId: 'planExercisesList',
    tpl: [
        '<tpl for=".">',
        '        <div class="exercise-list-envelope">',
        '            <div class="exercise-list-delete"></div>',
        '            <div class="exercise-list-fields">',
        '                <div class="exercise-list-images">',
        '                    <div class="exercise-list-img exercise-list-img-right" style="background-image: url({[(values[\'exercise_ext_id\'] && values[\'exercise_ext_id\'].indexOf (\'CUST\') == -1) ? (\'resources/images/previews/\'+values[\'exercise_ext_id\']) : (Ext.ux.ConfigManager.getServer() + Ext.ux.ConfigManager.getRoot() + \'/tpmanager/img/s/\'+values[\'exercise_ext_id\'])]}_2.jpg);"></div>',
        '                    <div class="exercise-list-img exercise-list-img-left" style="background-image: url({[(values[\'exercise_ext_id\'] && values[\'exercise_ext_id\'].indexOf (\'CUST\') == -1) ? (\'resources/images/previews/\'+values[\'exercise_ext_id\']) : (Ext.ux.ConfigManager.getServer() + Ext.ux.ConfigManager.getRoot() + \'/tpmanager/img/s/\'+values[\'exercise_ext_id\'])]}_1.jpg);"></div>',
        '                </div>',
        '                <div class="lanista-exercices-title">{[values["exercise_name"]]}</div>',
        '                <div class="lanista-exercices-foter">',
        '                    <div class="lanista-exercices-weight">{[values["weight_min"] > 0 ? "<span>Kg.</span>"+values["weight_min"] : ""]}</div>',
        '                    <div class="lanista-exercices-training"><span>{[Ext.ux.LanguageManager.TranslationArray.FORM_PLANEXRCISE_SETS]}</span> {rounds_min} </div>',
        '                    <div class="lanista-exercices-sets"><span>{[values["training_unit"] == 2 ? Ext.ux.LanguageManager.TranslationArray.MIN : values["training_unit"] == 1 ? Ext.ux.LanguageManager.TranslationArray.SEC : Ext.ux.LanguageManager.TranslationArray.REP]} {training_min} </span></div>',
        '                </div>',
        '            </div>',
        '        </div>',
        '</tpl>'
    ],
    width: 400,
    itemCls: 'lanista-plan-exercise',
    itemSelector: 'div.lanista-exercise-planpanel',
    selectedItemCls: 'lanista-plan-exercise-selected',
    store: 'PlanExerciseStore',
    defaultListenerScope: true,

    listeners: {
        afterrender: 'onPlanExercisesListAfterRender',
        viewready: 'onPlanExercisesListViewReady'
    },

    onPlanExercisesListAfterRender: function(component, eOpts) {
        el = component.el;

        el.on(
            'click', function(e,t) {
                var controller = LanistaTrainer.app.getController ('PlanController'),
                    activeTab = controller.getPlanPanel().down('tabpanel').getActiveTab(),
                    Exercise = Ext.ModelManager.getModel('LanistaTrainer.model.ExerciseModel');

                for (var i = 0; i < activeTab.el.dom.childNodes.length; i++)
                {
                    activeTab.el.dom.childNodes[i].internalId = i;
                }

                var internalItemId = Ext.get(t).dom.parentNode.internalId,
                    itemRecord = activeTab.recordsArray[internalItemId];

                itemRecord.internalId = internalItemId;
                Exercise.load(itemRecord.exercise_id !== 0 ? itemRecord.exercise_id : itemRecord.user_exercise_id, {
                    success: function( exercise ) {
                        LanistaTrainer.app.getController('PlanController').getPlanPanel().addCls ('blured');
                        LanistaTrainer.app.fireEvent('showExercisePanel', exercise, itemRecord);
                    }
                });
            },
            this, {delegate: '.exercise-list-fields'});

        el.on(
            'click', function(e,t) {
                var controller = LanistaTrainer.app.getController ('PlanController'),
                    activeTab = controller.getPlanPanel().down('tabpanel').getActiveTab();

                for (var i = 0; i < activeTab.el.dom.childNodes.length; i++){
                    activeTab.el.dom.childNodes[i].internalId = i;
                }
                if (!t.parentNode.classList.contains('lanista-list-itemrounded-deleting'))
                    t.parentNode.className = t.parentNode.className + ' lanista-list-itemrounded-deleting';

                var internalItemId = Ext.get(t).dom.parentNode.internalId;
                this.markDeleteExercises(t, internalItemId);
            },
            this, {delegate: '.exercise-list-delete'});

        el.on(
            'mouseover', function(e,t) {
                Ext.get(t).removeCls('item-not-clicked');
                Ext.get(t).addCls('item-clicked');
                Ext.get(t).down('.exercise-list-delete').setHTML('u');
                Ext.get(t).addCls('exercise-apply-delete');
            },
            this,{ delegate: '.lanista-plan-exercise'});

        el.on(
            'mouseout', function(e,t) {
                Ext.get(t).removeCls('item-clicked');
                Ext.get(t).addCls('item-not-clicked');
                Ext.get(t).down('.exercise-list-delete').setHTML('');
                Ext.get(t).removeCls('exercise-apply-delete');
            },
            this,{delegate: '.lanista-plan-exercise'});
    },

    onPlanExercisesListViewReady: function(dataview, eOpts) {
        var el = dataview.el,
            controller = LanistaTrainer.app.getController ('PlanController'),
            activeTab = controller.getPlanPanel().down('tabpanel').getActiveTab(),
            selectionTab;

        activeTab = controller.getPlanPanel().down('tabpanel').getActiveTab();
        if (!activeTab) return;

        if (!controller.selectionsTab) return;
        selectionTab = controller.selectionsTab[controller.currentDay.id.substring(1)];

        if (activeTab.id === el.id){
            //Looking for items that must be deleted and they are deleted
            for (var j = 0; j < selectionTab.length; j++){
                if (selectionTab[j][3] === 'd'){
                    for (var k = 0; k < dataview.recordsArray.length; k++){
                        if (dataview.recordsArray[k].exercise_id === selectionTab[j][0] || dataview.recordsArray[k].user_exercise_id === selectionTab[j][0])
                            break;
                    }
                    this.deleteItemView(dataview.recordsArray[k]);
                    selectionTab.splice(j,1);
                    activeTab.recordsArray.splice(j, 1);
                    dataview.getStore().load(function(records, operation, success) {
                        controller.populateTabsExercisesByDay(records);
                    });
                }
            }
        }

        for (var i = 0; i < el.dom.childNodes.length; i++)
        {
            el.dom.childNodes[i].internalId = i;
        }
    },

    markDeleteExercises: function(t, internalId) {
        var exercisesToDelete,
            exercisesToDeleteArray = [],
            pos;

        exercisesToDelete = LanistaTrainer.app.getController('PlanController').exercisesToDelete ? LanistaTrainer.app.getController('PlanController').exercisesToDelete : "";
        exercisesToDelete = new String(exercisesToDelete);

        if (exercisesToDelete.valueOf()){
            if (exercisesToDelete.indexOf(",") > 0)
                exercisesToDeleteArray = exercisesToDelete.split(",");
            else
                exercisesToDeleteArray[0] = exercisesToDelete.valueOf();
        }

        pos = exercisesToDeleteArray.indexOf(internalId.toString());
        if (pos >= 0){
            classValue = t.parentNode.className;
            classValue = classValue.replace('lanista-list-itemrounded-selected-delete','', 'g');
            t.parentNode.className = classValue;

            exercisesToDeleteArray.splice(pos,1);
            exercisesToDelete = "";
            if (exercisesToDeleteArray.length > 0){
                exercisesToDelete = exercisesToDeleteArray[0];
                for (var i = 1; i < exercisesToDeleteArray.length; i++){
                    exercisesToDelete = exercisesToDelete + ',' + exercisesToDeleteArray[i];
                }
            }
            LanistaTrainer.app.getController('PlanController').exercisesToDelete = exercisesToDelete;
            if (exercisesToDeleteArray.length <= 0)
                LanistaTrainer.app.getController('PlanController').getRightCommandPanel().getComponent('removePlanExercisesButton').hide();
        }
        else{
            t.parentNode.className = t.parentNode.className + ' lanista-list-itemrounded-selected-delete';
            LanistaTrainer.app.getController('PlanController').exercisesToDelete = exercisesToDelete.valueOf() ? exercisesToDelete + ',' + internalId : internalId.toString();
            LanistaTrainer.app.getController('PlanController').showCommands();
            LanistaTrainer.app.getController('PlanController').getRightCommandPanel().getComponent('removePlanExercisesButton').show();

        }

    }

});