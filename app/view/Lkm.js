Ext.define('RF.view.Lkm', {
	extend: 'Ext.Panel',
	xtype:'lkmpanel',
	
	config:{
		title: 'Hello, lkm World!',
		iconCls: 'compose',
		
		items: [
		        {
		        	docked: 'top',
		        	xtyep: 'titlebar',
		        	title: 'Lkm pannel 테스트 쩜점쩜',
		        	
		        	html:[].join('')		        	
	        }
        ]
		
	}
});