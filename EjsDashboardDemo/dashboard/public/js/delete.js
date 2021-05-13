$('.delete').click(function() {
    var response = confirm("do you want to delete")
    name = this.id;
    console.log(response)
    if(response === true){
        $.ajax({
            type: 'DELETE',
            url: '/delete_user',
            method: 'delete',
            data: {"name":name},
            success: function(data){
                console.log('data is '+JSON.stringify(data));
                window.location.reload()
            },
            error: function(){
                alert('No data');
            }
        });
    }
    else{
        console.log("not deleted")
    }
});