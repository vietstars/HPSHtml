;(function ($, window, undefined) {
    var dataSet = [
        [ "1","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-COMM</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "2","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-INSPECTION-FEE</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>94,506.677</a>"],
        [ "3","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SPARE-PARTS</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "4","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SUMMON-PAID</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "5","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SUMMON-REC</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "6","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-TOWING-FEE</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "7","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-DEPOSIT</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>94,506.677</a>"],
        [ "8","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-GENERAL-EXPENSES</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "9","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-INTERNET</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "10","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-IT-EQUIP</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "11","<a href='javascript:;' class='monitor-title' data-toggle='popover'>MICHAEL ALPHONSUS</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "12","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-INSPECTION-FEE</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>94,506.677</a>"],
        [ "13","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SPARE-PARTS</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "14","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SUMMON-PAID</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "15","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-SUMMON-REC</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "16","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-COST-TOWING-FEE</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "17","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-DEPOSIT</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>94,506.677</a>"],
        [ "18","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-GENERAL-EXPENSES</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "19","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-INTERNET</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "20","<a href='javascript:;' class='monitor-title' data-toggle='popover'>A-EXP-IT-EQUIP</a>","531500 --- COS - INSPECTION FEE", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
        [ "21","<a href='javascript:;' class='monitor-title' data-toggle='popover'>MICHAEL ALPHONSUS</a>","532300 --- COST - COMMISSION PAID : USED", "<a href='javascript:;' class='monitor-amount'>92,724.712</a>"],
    ];
    $(document).ready(function () {        
        var monitor=$('#monitoring-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "no." },
                { title: "title" },
                { title: "code" },
                { title: "amount" }
            ],
            "fnDrawCallback": function( oSettings ) {
                $('[data-toggle="popover"]').popover({
                    trigger: 'click',
                    placement: 'bottom',
                    html:true,
                    title:'Edit',
                    template:'<div class="popover edit-monitoring" role="tooltip"><div class="arrow"></div><h3 class="popover-header pop-edit-header"></h3><div class="popover-body pop-edit-body"></div></div>',
                    'content': function (e) {
                        return'<div class="row">'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ledger Code</label>'+
                                    '<select class="form-control choose-type" id="type" onchange="this.className=\'form-control choose-type selected\'">'+
                                        '<option selected>A-COST-COMM</option>'+
                                        '<option>2</option>'+
                                        '<option>3</option>'+
                                        '<option>4</option>'+
                                        '<option>5</option>'+
                                    '</select>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ref Title</label>'+
                                    '<input type="text" class="form-control search-sender" id="to" placeholder="Ref Title" value="A-COST-COMM">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Opening Balance </label>'+
                                    '<input type="text" class="form-control search-sender" id="from" placeholder="Opening Balance" value="0">'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-6">'+
                                '<div class="form-group">'+
                                    '<label for="Company-name">Ref Description</label>'+
                                    '<input type="text" class="form-control search-sender" id="to" placeholder="Ref Description" value="">'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<button type="button" class="btn btn-save">Save</button>'+
                        '<button type="button" class="btn btn-cancel">Cancel</button>';
                    }
                });
            }
        });
        /*************************/
        $( "#mount-range" ).slider({
            range: true,
            min: 0,
            max: 9999999.99,
            step: 0.01,
            values: [0,4545939.32 ],
            slide: function( event, ui ) {
                $( "#from" ).val(ui.values[0]);
                $( "#to" ).val(ui.values[1] );
            }
        });
        /**************************/
        $(document).on('click','.btn-save',function(){
            $('[data-toggle="popover"]').popover('hide');
        })
        $(document).on('click','.btn-cancel',function(){
            $('[data-toggle="popover"]').popover('hide');
        })
        $(document).on('show.bs.popover','[data-toggle="popover"]',function () {
          $('[data-toggle="popover"]').not(this).popover('hide');
        })
    });
})(jQuery, window);