;(function ($, window, undefined) {
    var dataSet = [
        [ "<a href='javascript:;' class='ledger'>111100</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='111100'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='111100'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='111100'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='111100'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121101</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121101</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121101'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121102</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121102'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121102'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121102'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121102'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121099</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121099'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121099'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121099'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121099'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121096</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121096'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121096'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121096'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121096'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121097</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121097'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121097'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121097'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121097'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121094</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121094'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121094'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121094'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121094'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121087</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121087'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121087'><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121087'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121087'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121093</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121093' checked><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121093' checked><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121093'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121093'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
        [ "<a href='javascript:;' class='ledger'>121090</a>","CASH IN BANK - SCB","N/A", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121090' checked><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121090' checked><label></label></div>", "<div class='checkbox checkbox-primary'><input type='checkbox' value='121090'><label></label></div>","<div class='checkbox checkbox-primary'><input type='checkbox' value='121090'><label></label></div><i class='fa fa-ellipsis-v fa-2x pull-right'></i><i class='fa fa-save fa-2x pull-right'></i>"],
    ];
    $(document).ready(function () {        
        $('#chartacc-list').DataTable( {
            data: dataSet,
            "iDisplayLength": 10,
            "paging": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            "info": false,
            columns: [
                { title: "Ledger" },
                { title: "Description" },
                { title: "GST" },
                { title: "Invoice" },
                { title: "V.Invoice" },
                { title: "Receipt" },
                { title: "Payment" }
            ]
        } );
    });
})(jQuery, window);