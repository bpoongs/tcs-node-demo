var name;
var to_be_updated;
        $(document).ready(function() {
            $('#myTable').DataTable();
            });
        // edit data
        $('.update').click(function() {
            id= this.id;
                $.ajax({
                    type: 'POST',
                    url: '/find_by_name',
                    data: {"name":id},
                    success: function(data){
                            to_be_updated = data[0].name;
                            $("#update_name").attr("value", data[0].name);
                            $("#update_email").attr("value", data[0].email);
                            $("#update_phone").attr("value", data[0].phone);
                            $('#Modal').modal({show: true});
                        },
                    error: function(){
                        alert('No data');
                    }
                    });
            });




            
            // update data
                  $(function(){
                      $('#update_table').on('click', function(e){
                        console.log('i am indsd');
                        var data = $('#update_user').serialize();
                        debugger;
                        console.log(JSON.stringify(data));
                        e.preventDefault();
                        $.ajax({
                          url: '/update_user',
                          type:'PUT',
                          data : data,
                          success: function(data){
                            console.log('i am googleapis');
                            window.location.reload()
                        },
                        error: function(){
                          alert('No data');
                        }
                      });
                  });
                  });