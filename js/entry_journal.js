;(function ($, window, undefined) {
    var dataSet = [
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-delete'>deleted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-delete'>close</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-posted'>posted</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
        [ "1","<a href='javascript:;'>AMRD201706-0027</a>","FW1411Z-001 : PA200801-0164", "08/09/2017","<a href='javascript:;' class='amount'>20,000.00</a>","<a href='javascript:;'>18,000.00</a>", "<button class='btn btn-open'>open</button><i class='fa fa-ellipsis-v fa-2x pull-right'></i>"],
    ];
    $(document).ready(function () {        
        var monitor=$('#entry-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "No." },
                { title: "AR No" },
                { title: "Description" },
                { title: "Period Date" },
                { title: "Debit" },
                { title: "Credit" },
                { title: "Status" }
            ]
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