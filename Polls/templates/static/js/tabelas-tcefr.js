$(document).ready(function () {
    $('#grupo01').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [{
            "visible": true,
            "targets": -1
        }],
        "dom": 'B<"clear">lfrtip',
        "buttons": ['excel'],
        "aoColumns": [
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    });
});


$(document).ready(function () {
    $('#grupo02').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [{
            "visible": true,
            "targets": -1
        }],
        "dom": 'B<"clear">lfrtip',
        "buttons": ['excel'],
        "aoColumns": [
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
    });
});

$(document).ready(function () {
    $('#tabanexotres').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "dom": 'B<"clear">lfrtip',
        "buttons": ['excel'],
    });
});

$(document).ready(function () {
    $('#tabanexoquatro').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [{
            "visible": true,
            "targets": -1
        }],
        "dom": 'B<"clear">lfrtip',
        "buttons": ['excel'],
        "aoColumns": [
            null,
            null,
            null,
            null,
        ]
    });
});

// $(document).ready(function () {
//     $('#tabanexocincog1').DataTable({
//         "paging": false,
//         "searching": false,
//         "info": false,
//         "columnDefs": [{
//             "visible": true,
//             "targets": -1
//         }],
//         "dom": 'B<"clear">lfrtip',
//         "buttons": ['excel'],
//         "aoColumns": [
//             null,
//             null,
//             null,
//             null,
//         ]
//     });
// });
//
// $(document).ready(function () {
//     $('#tabanexocincog2').DataTable({
//         "paging": false,
//         "searching": false,
//         "info": false,
//         "columnDefs": [{
//             "visible": true,
//             "targets": -1
//         }],
//         "dom": 'B<"clear">lfrtip',
//         "buttons": ['excel'],
//         "aoColumns": [
//             null,
//             null,
//             null,
//             null,
//         ]
//     });
// });

$(document).ready(function () {
    $('#tabanexocincog1').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});



$(document).ready(function () {
    $('#tabanexocincog2').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": false,
        "searching": false,
        "ordering": true,
        "info": false,
    });
});


$(document).ready(function () {
    $('#tabanexodois').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": true,
        "searching": false,
        "ordering": true,
        "info": true,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});

$(document).ready(function () {
    $('#tabanexoseis').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});

$(document).ready(function () {
    $('#tabanexosete').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": true,
        "searching": true,
        "ordering": false,
        "info": true,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});

$(document).ready(function () {
    $('#tabanexooito').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": false,
        "searching": false,
        "ordering": false,
        "info": false,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});

$(document).ready(function () {
    $('#tabanexonove').DataTable({
        "language": {
            "decimal": ',',
            "thousands": '.',
            "searchPlaceholder": 'Pesquisar...',
            "sSearch": '',
            "lengthMenu": '_MENU_ Items/Página',
        },
        "responsive": true,
        "deferRender": true,
        "scroller": false,
        "processing": true,
        "paging": true,
        "searching": false,
        "ordering": true,
        "info": true,
        "dom": 'B<"clear">frtlip',
        "buttons": ['excel'],
    });
});
