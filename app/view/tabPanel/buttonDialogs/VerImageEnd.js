/**
 * Creates class pmdCE.view.tabPanel.buttonDialogs.VerovioImageEnd that extend from Ext.form.Panel.
 * @class
 * @classdesc pmdCE.view.tabPanel.buttonDialogs.VerovioImageEnd is a class for create
 * verovio view in dialogs for define end time for elements.
 */
Ext.define('pmdCE.view.tabPanel.buttonDialogs.VerovioImageEnd', {
	extend: 'Ext.form.Panel',
	layout: 'absolute',
	
	height: 100,
	width: 250,
	border: false,
	tileId: null,
	bodyId: null,
	margin: '0 0 0 35',
	
	renderer: null,	
	currId2: null,
	tstampShift1: null,
	
	/**
	 * Get data for verovio and create a view with click listener
	 * @overrides
	 */
	initComponent: function () {
		
		var me = this;
		me.currId2 = me.id;
		Ext.getCmp('cemain').setVerEndId(me.currId2);
		
		app = pmdCE.getApplication();
		me.renderer = app.getRenderer();
		
		var pageNr = Ext.getCmp('pages').getText();
		var measureid = Ext.getCmp('cemain').getEndMeasure();
		var staffNr = Ext.getCmp('cemain').getStaffNr();
		var movement = Ext.getCmp('movement').getText();
		var measurePath = movement + "_measure" + measureid + "_s" + staffNr;
		
		Ext.Ajax.request({
			//url: "data/testEnd.mei",
			  url: "resources/xql/getExtendedStaff.xql",
			method: 'GET',
			params: {
				path: pageNr,
				staffID: measurePath,
				id_prefix: 'hairpinEnd___',
				endPageName: pageNr
			},
			success: function (response) {
				var text = response.responseText;
				
				var options = JSON.stringify({
					pageHeight: 450,
					pageWidth: 850,
					ignoreLayout: 25,
					border: 0,
					scale: 33
				});
				me.renderer.setOptions(options);
				me.renderer.loadData(text);
				var svg = me.renderer.renderPage(1, options);
				
				$('#' + me.currId2 + '-body').html(svg);
				
				var xmlFile = jQuery.parseXML(text);
				var meiElements = xmlFile.getElementsByTagName('note');
				
				var elements = document.getElementsByClassName('note');
				
				for (var i = 0; i < elements.length; i++) {
					var element = elements[i];
					var elId = element.id;
					if (elId.indexOf('End') != -1) {
						$("#" + elId).on('click', function (e) {
							// two notes were selected
							if (e.shiftKey) {
								me.handleEventForTwoNotes(elements, e.currentTarget, meiElements);
							} else {
								// one note was selected
								me.handleEventForOneNote(elements, e.currentTarget, meiElements);
							}
						});
					}
				}
			}
		});
		this.callParent()
	},
	
	/**
	 * Change color of selected/deselected two notes, compute end time and set this in tstamp2 field
	 * @param {object} elements: elements from document.
	 * @param {object} note: selected note.
	 * @param {object} meiElements: element from mei document.
	 */
	handleEventForTwoNotes: function (elements, note, meiElements) {
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var elId = element.id;
			
			if (elId.indexOf('End') != -1 && elId === note.id) {
				var tstamp = null
				for (var j = 0; j < meiElements.length; j++) {
					var elementXML = meiElements[j];
					var elXMLId = elementXML.getAttribute('xml:id');
					if (elXMLId === note.id) {
						if (note.style.fill === '#000000' || note.style.fill === 'rgb(0, 0, 0)') {
							// TODO: set tstamp field
							var tstamp = elementXML.getAttribute('tstamp');
							$(note).css('fill', '#3adf00');
							$(note).children().css('stroke', '#3adf00');
						}
						if (tstamp !== null && this.tstampShift1 !== null) {
							if (typeof Ext.getCmp('tstampFieldObv') !== 'undefined') {
								
								var tstampInt = parseFloat(tstamp);
								var tstampShift1Int = parseFloat(this.tstampShift1);
								
								var avValue = (tstampInt + tstampShift1Int) / 2;
								var prefix = null;
								var startId = Ext.getCmp('cemain').getStartMeasure();
								if (elXMLId.indexOf(startId) > -1) {
									prefix = 0;
								} else {
									var testArr = elXMLId.split("_");
									for (var x = 0; x < testArr.length; x++) {
										if (testArr[x].indexOf('measure') > -1) {
											var diff = parseInt(testArr[x].substring(7));
											console.log(diff);
											prefix = diff - startId;
											break;
										}
									}
								}
								
								Ext.getCmp('tstampField2Obv').setValue(prefix + "m+" + avValue);
								Ext.getCmp('tstampField2Obv').focus();
								break;
							} else if (typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1) {
								var tstampInt = parseFloat(tstamp);
								var tstampShift1Int = parseFloat(this.tstampShift1);
								
								var avValue = (tstampInt + tstampShift1Int) / 2;
								var prefix = null;
								var startId = Ext.getCmp('cemain').getStartMeasure();
								if (elXMLId.indexOf(startId) > -1) {
									prefix = 0;
								} else {
									var testArr = elXMLId.split("_");
									for (var x = 0; x < testArr.length; x++) {
										if (testArr[x].indexOf('measure') > -1) {
											var diff = parseInt(testArr[x].substring(7));
											console.log(diff);
											prefix = diff - startId;
											console.log(startId);
											console.log(prefix);
											break;
										}
									}
								}
								
								
								var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
								Ext.getCmp(selectedId).setValue(prefix + "m+" + avValue);
								Ext.getCmp(selectedId).focus();
								break;
							}
						}
					}
				}
			}
		}
	},
	
	/**
	 * Change color of selected/deselected note, compute end time and set this in tstamp2 field
	 * @param {object} elements: elements from document.
	 * @param {object} note: selected note.
	 * @param {object} meiElements: element from mei document.
	 */
	handleEventForOneNote: function (elements, note, meiElements) {
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var elId = element.id;
			if (elId.indexOf('End') != -1 && elId === note.id) {
				for (var j = 0; j < meiElements.length; j++) {
					var elementXML = meiElements[j];
					var elXMLId = elementXML.getAttribute('xml:id');
					if (elXMLId === note.id) {
						console.log(note.style.fill);
						// set color
						if (note.style.fill === '#000000' || note.style.fill === 'rgb(0, 0, 0)') {
							// TODO: set tstamp field
							var tstamp = elementXML.getAttribute('tstamp');
							this.tstampShift1 = elementXML.getAttribute('tstamp');
							if (typeof Ext.getCmp('tstampField2Obv') !== 'undefined') {
								var prefix = null;
								var startId = Ext.getCmp('cemain').getStartMeasure();
								if (elXMLId.indexOf(startId) > -1) {
									prefix = 0;
								} else {
									var testArr = elXMLId.split("_");
									for (var x = 0; x < testArr.length; x++) {
										if (testArr[x].indexOf('measure') > -1) {
											var diff = parseInt(testArr[x].substring(7));
											console.log(diff);
											prefix = diff - startId;
											console.log(startId);
											console.log(prefix);
											break;
										}
									}
								}
								Ext.getCmp('tstampField2Obv').setValue(prefix + "m+" + tstamp);
								Ext.getCmp('tstampField2Obv').focus();
							} else if (typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1) {
								console.log(Ext.getCmp('ambiguouscard').getSelectedFieldId());
								var prefix = null;
								var startId = Ext.getCmp('cemain').getStartMeasure();
								if (elXMLId.indexOf(startId) > -1) {
									prefix = 0;
								} else {
									var testArr = elXMLId.split("_");
									for (var x = 0; x < testArr.length; x++) {
										if (testArr[x].indexOf('measure') > -1) {
											var diff = parseInt(testArr[x].substring(7));
											console.log(diff);
											prefix = diff - startId;
											console.log(startId);
											console.log(prefix);
											break;
										}
									}
								}
								var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
								Ext.getCmp(selectedId).setValue(prefix + "m+" + tstamp);
								Ext.getCmp(selectedId).focus();
							}
							$(note).css('fill', '#3adf00');
							$(note).children().css('stroke', '#3adf00');
						} else if (note.style.fill === '#3adf00' || note.style.fill === 'rgb(58, 223, 0)') {
							// set color back after second note click
							tstampShift1 = null;
							if (typeof Ext.getCmp('tstampField2Obv') !== 'undefined') {
								Ext.getCmp('tstampField2Obv').setValue('');
								Ext.getCmp('tstampField2Obv').focus();
							} else if (typeof Ext.getCmp('ambiguouscard').getSelectedFieldId() !== 'undefined' && Ext.getCmp('ambiguouscard').getSelectedFieldId() !== null && Ext.getCmp('ambiguouscard').getSelectedFieldId().indexOf('tstamp2') > -1) {
								var selectedId = Ext.getCmp('ambiguouscard').getSelectedFieldId();
								Ext.getCmp(selectedId).setValue('');
								Ext.getCmp(selectedId).focus();
							}
							$(note).css('fill', '#000000');
							$(note).children().css('stroke', '#000000');
						}
					}
				}
			} else if (elId.indexOf('End') != -1) {
				// other note was clicked: set color back
				tstampShift1 = null;
				$(element).css('fill', '#000000');
				$(element).children().css('stroke', '#000000');
			}
		}
	}
});