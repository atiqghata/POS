<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            <div class="content-header">
                                    <!---Start Third card shop-->
                                    <h2 class="text-md">Purchase Return  List View / <small class="text-gray text-sm"><span>Search Purchase Items</span></small></h2>
                                    <div class="row">
                                        <div class="col-12 col-sm-6 col-md-3 ">
                                        <div class=" mb-3 p-5 bg-danger">
                                            <span class="float-right"><i class="fa fa-plus-square-o fa-4x"></i></span>
                                            <div class="info-box-content">
                                            <span class=" text-xl"> &nbsp;6</span><br>
                                            <span class="text-sm"><strong>Total Invoices Amount</strong></span>
                                            </div>    
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                        </div>
                            
                                        <div class="col-12 col-sm-6 col-md-3 ">
                                        <div class=" mb-3 p-5 bg-warning">
                                            <span class="float-right"><i class="fa fa-undo fa-4x"></i></span>
                                            <div class="info-box-content">
                                            <span class=" text-xl"> &nbsp;8</span><br>
                                            <span class="text-sm"><strong>Total Invoices Amount</strong></span>
                                            </div>    
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                        </div>
                            
                                        <div class="col-12 col-sm-6 col-md-3 ">
                                        <div class=" mb-3 p-5 bg-primary">
                                            <span class="float-right"><i class="fa fa-hourglass fa-4x"></i></span>
                                            <div class="info-box-content">
                                            <span class=" text-xl"> &nbsp;10</span><br>
                                            <span class="text-sm"><strong>Total Invoices Amount</strong></span>
                                            </div>    
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                        </div>
                            
                                        <div class="col-12 col-sm-6 col-md-3 ">
                                        <div class=" mb-3 p-5 bg-success">
                                            <span class="float-right"><i class="fa fa-users fa-4x"></i></span>
                                            <div class="info-box-content">
                                            <span class=" text-xl"> &nbsp;37</span><br>
                                            <span class="text-sm"><strong>Total Invoices Amount</strong></span>
                                            </div>    
                                            <!-- /.info-box-content -->
                                        </div>
                                        <!-- /.info-box -->
                                        </div>
                            
                                        <!-- /.col -->
                                    </div>
                                    <!-- /.row -->
                                    <!---End Third card shop-->


                                    <!-- alert start -->
                                        <div class="content-header">
                                            <div class="container-fluid">
                                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                            </div>
                                            </div>
                                        </div>                  
                                    <!-- alert end -->

                                        <!---- start Content Data table-->
                                        <div class="container-fluid">
                                            <div class="card border-top border-primary">
                                                <div class="card-header">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h1 class="display-4"> Purchase Return List</h1>
                                                        </div>  
                                                        <div class="col-md-6"></div> 
                                                        <div class=" col-md-2 box-tools float-right mb-3">
                                                            <a class="btn btn-block btn-info " href="#">
                                                            <i class="fa fa-plus "></i> Add Category </a>
                                                        </div>  
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-12"><div class="pull-left">
                                                        <div class="dataTables_length" id="example2_length">
                                                        <label>Show <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                        <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="pull-right"><div id="example2_filter" class="dataTables_filter">
                                                        <label class="mt-4">
                                                        <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2">
                                                        </label>
                                                        </div><div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"></div></div><div class="pull-right margin-left-10 ">
                                                        <div class="dt-buttons btn-group mt-4 mr-2">              
                                                        <button class="btn btn-default bg-red color-palette btn-flat hidden delete_btn pull-left" tabindex="0" aria-controls="example2" type="button">
                                                        <span>Delete</span></button> <button class="btn btn-default buttons-copy buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Copy</span></button> <button class="btn btn-default buttons-excel buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Excel</span></button> <button class="btn btn-default buttons-pdf buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>PDF</span></button> <button class="btn btn-default buttons-print bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Print</span></button> <button class="btn btn-default buttons-csv buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                        <span>CSV</span></button> 
                                                        <button class="btn btn-default buttons-collection buttons-colvis bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button" aria-haspopup="true"><span>Columns</span></button> 
                                                        </div></div></div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="box-body">
                                                        <table id="example2" class="table table-bordered table-striped dataTable dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                                <thead class="bg-primary ">
                                                                    <tr role="row">
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 70px;" aria-label="Purchase Date: activate to sort column ascending">Date</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 70px;" aria-label="Purchase Date: activate to sort column ascending">Purchase Date</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 93px;" aria-label="Purchase Code: activate to sort column ascending">Purchase Code</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 79px;" aria-label="Purchase Status: activate to sort column ascending">Purchase Status</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 69px;" aria-label="Reference No.: activate to sort column ascending">Reference No.</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 73px;" aria-label="Supplier Name: activate to sort column ascending">Supplier Name</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 41px;" aria-label="Total: activate to sort column ascending">Total</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 67px;" aria-label="Paid Payment: activate to sort column ascending">Paid Payment</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 41px;" aria-label="Due: activate to sort column ascending">Due</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 71px;" aria-label="Payment Status: activate to sort column ascending">Payment Status</th>
                                                                            <th rowspan="1" colspan="1" style="width: 52px;" aria-label="Created by">Created by</th>
                                                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 53px;" aria-label="Action: activate to sort column ascending">Action</th>
                                                                    </tr>
                                                                </thead>   
                                                                <tbody>
                                                                    <tr role="row">
                                                                            <div style="position: relative;">
                                                                                <td>01-07-2020</td>
                                                                                <td>PU0016</td>
                                                                                <td>PR0002</td>
                                                                                <td>Return</td>
                                                                                <td></td>
                                                                                <td>John</td>
                                                                                <td>550.00</td>
                                                                                <td>550.00</td>
                                                                                <td>0.00</td>
                                                                                <td><span class="label label-success" style="cursor:pointer"> Paid </span></td>
                                                                                <td><span class="bg-success p-2 rounded">Admin</span></td>
                                                                                <td>
                                                                                    <div class="btn-group" title="View Account">
                                                                                        <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                                    Action <span class="caret"></span>
                                                                                        </a>
                                                                                        <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                                            <li>
                                                                                                <a title="View Invoice" href="#">
                                                                                                    <i class="fa fa-fw fa-eye text-blue"></i>View Purchase
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </td>
                                                                            </div>
                                                                    </tr>   
                                                                    <tr role="row">
                                                                        <div style="position: relative;">
                                                                            <td>01-07-2020</td>
                                                                            <td>PU0016</td>
                                                                            <td>PR0002</td>
                                                                            <td>Return</td>
                                                                            <td></td>
                                                                            <td>John</td>
                                                                            <td>550.00</td>
                                                                            <td>550.00</td>
                                                                            <td>0.00</td>
                                                                            <td><span class="label label-success" style="cursor:pointer"> Paid </span></td>
                                                                            <td><span class="bg-success p-2 rounded">Admin</span></td>
                                                                            <td>
                                                                                <div class="btn-group" title="View Account">
                                                                                    <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                                Action <span class="caret"></span>
                                                                                    </a>
                                                                                    <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                                        <li>
                                                                                            <a title="View Invoice" href="#">
                                                                                                <i class="fa fa-fw fa-eye text-blue"></i>View Purchase
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </td>
                                                                        </div>
                                                                    </tr>             
                                                                </tbody>
                                                                <tfoot>
                                                                <tr class="bg-gray">
                                                                    <th colspan="6" style="text-align:right" class="text-center" rowspan="1">Total</th>
                                                                    <th rowspan="1" colspan="1">1,100.0</th>
                                                                    <th rowspan="1" colspan="1">1,100.0</th>
                                                                    <th rowspan="1" colspan="1">0.0</th>
                                                                    <th rowspan="1" colspan="1"></th>
                                                                    <th rowspan="1" colspan="1"></th><th rowspan="1" colspan="1"></th>
                                                                </tr>
                                                                </tfoot>
                                                        </table>
                                                        <div class="next d-flex justify-content-between align-items-center">
                                                            <div role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div>
                                                            <nav aria-label="Page navigation example">
                                                                <ul class="pagination">
                                                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                                </ul>
                                                                </nav>
                                                        </div>                              
                                                    </div>
                                                </div>
                                            </div>
                                        <!--End Product Table-->
                                        </div>
                                        <!--End Content Data table--->
                            </div>
                        </div> 
                    <!-- /.content-wrapper -->
                    <Footer/>
                    <Sidebar/>
            </div>
        </body>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'

export default {
    name:'',
    components: {
    Navbar,
    Sidebar,
    Footer
}

}
</script>

<style lang="stylus">

</style>