const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];           
var check = function() {
    if(document.getElementById('password').value.length >= 8)
    {
        if (document.getElementById('password').value !=
        document.getElementById('cpassword').value) {
        document.getElementById('message').style.color = 'orange';
        document.getElementById('message').innerHTML = 'Passwords do not match';
        document.getElementById('register').disabled = true;
        $('#cpassword').css('background-color', 'red');
        $('#password').css('background-color', 'red');
        }
        else{
            document.getElementById('message').innerHTML = '';
            document.getElementById('register').disabled= false;
            $('#cpassword').css('background-color', 'white');
            $('#password').css('background-color', 'white');
        }
    }
    else{
        $('#password').css('background-color', 'red');
        document.getElementById('message').style.color = 'orange';
        document.getElementById('message').innerHTML = 'Password must be at least 8 characters';
        document.getElementById('register').disabled = true;
    }
    if($('#usererr').text() != '' || $('#bdayerr').text() != ''){
        document.getElementById('register').disabled= true;
    }
}
var loadFile = function(event) {
    var fileSize = event.target.files.length;
    var append = ""
    var flag = false;
    $("#photoalbum").empty();
    for(var i = 0; i< fileSize; i++)
    {
        var reader = new FileReader();
        reader.onload = function(e){
            var image = document.createElement("img");
            var source = document.createAttribute("src");
            source.value = e.target.result;
            image.setAttributeNode(source);
            var element = document.getElementById("photoalbum");
            element.appendChild(image);
        };
        if(fileSize >= 1)
        {
            if(i === fileSize - 1)
            append = append + "img/" + document.getElementById("imgInput").files.item(i).name + ""
            else
            append = append + "img/" + document.getElementById("imgInput").files.item(i).name + " "
        }
        var file = event.target.files[i];
        var fileType = file['type'];
        var validimg = ['image/gif', 'image/png', 'image/jpeg', 'image/jpg'];
        if(validimg.includes(fileType))
        reader.readAsDataURL(event.target.files[i]);
        else
            flag = true;
    }
    if(flag)
    alert("You inserted a non-image file. This will not be included");
    document.getElementById("imageNames").value = append;

  };


$(function(){
    $("#addtranspo").click(function(){

        var template  = "<tr><td colspan='4' style='border-bottom: 2px solid #aaa'><strong>Transportation</strong></td></tr>"
        + "<tr><td><label for='act_trans'>Transportation Details:</label><textarea id='act_trans'  name='act_trans' rows='3' cols='25'></textarea></td>"
                    
        $("#morefield").append(template);
        $("#addtranspo").remove();
    });
    $("#addcontact").click(function(){

        var template  = "<tr><td colspan='4' style='border-bottom: 2px solid #aaa'><strong>Contact Information</strong></td></tr>"
        +"<tr><td><label for='act_cname'>Contact Name:</label></td><td><input type='text' id='act_cname' name='act_cname'></td>"
        + "<td><label for='act_cnum'>Contact Mobile Number:</label></td><td><input type='number' id='act_cnum' name='act_cnum'></td></tr>"
        + "<tr><td><label for='act_cmail'>Contact Email:</label></td><td><input type='email' id='act_cmail' name='act_cmail'></td></tr>";
                    
        $("#morefield").append(template);
        $("#addcontact").remove();
    });
    $("#add").click(function()
    {

            var flag = 0;
            $("#act_name").val($("#act_name").val().trim());
            $("#act_date").val($("#act_date").val().trim());

            if($("#act_name").val() === null || $("#act_name").val() === "")
            {
                alert("Please enter a name for the activity")
                flag = 1;
            }
            if($("#act_date").val() === null || $("#act_date").val() === "")
            {
                alert("Please enter a date for the activity")
                flag = 1;
            }
            
            console.log(flag);
            if(flag == 0)
            {
                var total = Number(document.getElementById("total").textContent);
                var cname = $("#act_cname").val();
                var cnum = $("#act_cnum").val();
                var cemail = $("#act_cmail").val();
                var transpo = $("#act_trans").val()
                var expense = $("#act_cost").val();
                
                if(typeof cname === "undefined")
                {
                    cname = "";
                }
                if(typeof cnum === "undefined")
                {
                    cnum = "";
                }
                if(typeof cemail === "undefined")
                {
                    cemail = "";
                }
                if(typeof transpo === "undefined")
                {
                    transpo = "";
                }
                if(!(typeof expense === "undefined"))
                {
                    total += Number($("#act_cost").val());
                    document.getElementById("total").textContent = total.toFixed(2); 
                    $('#total span').text(total.toFixed(2));
                }
                else
                {
                    expense = "";
                }
                
                var template  = "<tr><td> " + $("#act_name").val() + "<td> " + $("#act_date").val() + " </td>" + " </td>" + "<td> " + $("#act_stime").val() + " </td>" + "<td> " + $("#act_etime").val() + " </td>";
                template += "<td> " + $("#act_street").val() + " </td>" + "<td> " + $("#act_city").val() + " </td>" + "<td> " + $("#act_zip").val() + " </td>";
                template += "<td> " + cname + " </td>" + "<td> " + cnum + " </td>" + "<td> " + cemail + " </td>";
                template += "<td> " + transpo + " </td>" + "<td> " + expense + " </td>";
                 $("#appendhere").append(template);
                 setTimeout(function(){ 
                    $("#act_name").val("");
                    $("#act_date").val("");
                    $("#act_stime").val("");
                    $("#act_etime").val("");
                    $("#act_street").val("");
                    $("#act_city").val("");
                    $("#act_zip").val("");
                    $("#act_cname").val("");
                    $("#act_cnum").val("");
                    $("#act_cmail").val("");
                    $("#act_trans").val("");
                    $("#act_cost").val("");
                }, 100);
                $('#it_start').prop('readonly', true);
                $('#it_end').prop('readonly', true);
            }
        
    });
    $('.deleteMemory').click(function(){
        if(confirm("Are you sure you want to delete this memory?"))
        {
            var _id = $(this).parent().siblings(".col-md-8").children().children("p").text();
            $.get('/deleteMemory', {_id : _id});
            var btnparent = $(this).parent();
            btnparent.parent().remove();
        }
    });  

    $('#deleteReview').click(function(){
        if(confirm("Are you sure you want to delete this review?"))
        {
            var it_id = window.location.href.substring(45);
            $.get('/deleteReview', {it_id : it_id});
        }
    });
    
    $(document).on("click", ".deleteComment", function() {
        if(confirm("Are you sure you want to delete this comment?"))
        {
            var _id = $(this).parent().siblings("._idCom").val();
            $.get('/deleteComment',
            {
                _id: _id
            })
            $(this).parent().parent().parent().remove()
            }
    });
    

    $(document).on("click", ".editComment", function() {
        var comment = $(this).parent().parent().siblings(".panel-body").children('p').text()
        var it_id = $(this).parent().parent().parent().parent().siblings('.it_idCom').val();
        var newcomment = prompt("Edit your comment", comment);
        if(newcomment != null)
        newcomment = newcomment.trim();
        if (newcomment === null || newcomment === "") {
            $(this).parent().parent().siblings(".panel-body").children('p').text(comment);
        } else {
            $(this).parent().parent().siblings(".panel-body").children('p').text(newcomment);
            $.get('/editComment',
            {
                comment: newcomment,
                it_id: it_id
            });
        }
    });

    $(document).on("click", ".commentNum", function() {
        var it_id = $(this).parent().parent().siblings(".it_idCom").val();
        var name = $(this).parent().parent().siblings(".nameCom").val();
        var today = new Date();
        var formattedDate = months[today.getMonth()] + ' ' + today.getDate().toString().padStart(2, 0) + ', ' + today.getFullYear().toString() + ' ' + ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2) + ':';
        var comment = prompt("Write your comment below");
        if (comment === null || comment === "") {
            if (comment === null) {} else
                alert("You cannot post a blank comment");
        } else {
            var template = '<div class="panel panel-info"><div class="panel-heading">' + name + ' wrote on <span class="pull-right edited"><u class="deleteComment" title="Delete Comment">Delete</u></span><span class="pull-right edited"><u class="editComment" title="Edit Comment">Edit</u>&nbsp;</span><br>' + formattedDate;
            template += '</div> <div class="panel-body"><p>' + comment + '</p></div> </div>';
            $(this).parent().parent().siblings('.comment').append(template)
            $.get('/comment',
            {
                it_id: it_id,
                comment: comment,
            });
            document.location.reload()
        }
    });
    $(document).on("click", ".view", function(){
        var it_name = $(this).parent().siblings('.col-md-8').children().children('.panel-heading').children().children().text();
        var it_id = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.id').text().substring(4);
        var it_sdate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.sdate').text().substring(11);
        var it_edate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.edate').text().substring(9);
        var it_location = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.loc').text().substring(9);
        var href = $(this).attr('href') + '?it_id=' + it_id + '&it_sdate=' + it_sdate + '&it_edate=' + it_edate + '&it_location=' + it_location + '&it_name=' + it_name;
        $(this).attr('href', href);
    });

    $(document).on("click", ".download", function(){
        var it_name = $(this).parent().siblings('.col-md-8').children().children('.panel-heading').children().children().text();
        var it_id = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.id').text().substring(4);
        var it_sdate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.sdate').text().substring(11);
        var it_edate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.edate').text().substring(9);
        var it_location = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.loc').text().substring(9);
        var href = $(this).attr('href') + '?it_id=' + it_id + '&it_sdate=' + it_sdate + '&it_edate=' + it_edate + '&it_location=' + it_location + '&it_name=' + it_name;
        $(this).attr('href', href);
    });

    $(document).on("click", ".dashboardDownload", function(){
        var it_name = $(this).parent().parent().siblings('.title').children().text();
        var it_id = $(this).parent().parent().siblings('.id').children().text();
        var it_sdate = $(this).parent().parent().siblings('.date').text().substring(0,12);
        var it_edate = $(this).parent().parent().siblings('.date').text().substring(15);
        var it_location = $(this).parent().parent().siblings('.loc').text();
        var href = $(this).attr('href') + '?it_id=' + it_id + '&it_sdate=' + it_sdate + '&it_edate=' + it_edate + '&it_location=' + it_location + '&it_name=' + it_name;
        $(this).attr('href', href);
    });

    $(document).on("click", ".seeDetails", function(){
        var it_name = $(this).parent().parent().siblings('.title').children().text();
        var it_id = $(this).parent().parent().siblings('.id').children().text();
        var it_sdate = $(this).parent().parent().siblings('.date').text().substring(0,12);
        var it_edate = $(this).parent().parent().siblings('.date').text().substring(15);
        var it_location = $(this).parent().parent().siblings('.loc').text();
        var href = $(this).attr('href') + 's?it_id=' + it_id + '&it_sdate=' + it_sdate + '&it_edate=' + it_edate + '&it_location=' + it_location + '&it_name=' + it_name;
        $(this).attr('href', href);
    });

    $(document).on("click", "#viewReview", function(){
        var href = $(this).attr('href') + window.location.href.substring(34, 49);
        $(this).attr('href', href);
    });

    $(document).on("click", "#review", function(){
        var href = $(this).attr('href') + window.location.href.substring(34, 49);
        $(this).attr('href', href);
    });

    $(document).on("click", "#editReview", function(){
        var href = $(this).attr('href') + window.location.href.substring(34, 49);
        $(this).attr('href', href);
    });

    $(document).on("click", "#it_viewDownload", function(){
        var href = $(this).attr('href') + window.location.href.substring(34);
        $(this).attr('href', href);
    });

    $(document).on("click", "#viewEdit", function(){
        var href = $(this).attr('href') + window.location.href.substring(34);
        $(this).attr('href', href);
    });

    $(document).on("click", "#viewEditReview", function(){
        var href = $(this).attr('href') + window.location.href.substring(39);
        $(this).attr('href', href);
    });

    

    $(document).on("click", ".editItinerary", function(){
        var it_name = $(this).parent().siblings('.col-md-8').children().children('.panel-heading').children().children().text();
        var it_id = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.id').text().substring(4);
        var it_sdate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.sdate').text().substring(11);
        var it_edate = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.edate').text().substring(9);
        var it_location = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.loc').text().substring(9);
        var href = $(this).attr('href') + '?it_id=' + it_id + '&it_sdate=' + it_sdate + '&it_edate=' + it_edate + '&it_location=' + it_location + '&it_name=' + it_name;
        $(this).attr('href', href);
    });

    $(document).on("click", ".editAct", function(){

        if(confirm("Are you sure you want to update this activity?"))
        {
            var it_id = $('#edit_id').val();

            var act_name = $(this).parent('td').siblings('td').children('.act_name').val();
            var act_date = $(this).parent('td').siblings('td').children('.act_date').val();
            var act_stime = $(this).parent('td').siblings('td').children('.act_stime').val();
            var act_etime = $(this).parent('td').siblings('td').children('.act_etime').val();
            var act_cost = $(this).parent('td').siblings('td').children('.act_cost').val();
            var act_address = $(this).parent('td').siblings('td').children('.act_address').val();
            var act_cname = $(this).parent('td').siblings('td').children('.act_cname').val();
            var act_cnum = $(this).parent('td').siblings('td').children('.act_cnum').val();
            var act_cmail = $(this).parent('td').siblings('td').children('.act_cmail').val();
            var act_trans  = $(this).parent('td').siblings('td').children('.act_trans').val();

            var href = $(this).attr('href') + '?it_id=' + it_id + '&act_name=' + act_name + '&act_date=' + act_date 
            + '&act_stime=' + act_stime + '&act_etime=' + act_etime + '&act_cost=' + act_cost + '&act_address=' + act_address 
            + '&act_cname=' + act_cname + '&act_cnum=' + act_cnum + '&act_cost=' + act_cmail + '&act_trans=' + act_trans;
            $(this).attr('href', href);

            $.get('/editAct', 
                {
                    it_id: it_id, 
                    name: act_name, 
                    date: act_date, 
                    stime: act_stime, 
                    etime: act_etime, 
                    cost: act_cost,
                    address: act_address,
                    cname: act_cname,
                    cnum: act_cnum,
                    cmail: act_cmail,
                    transpo: act_trans
                });
        }

    });

    $(document).on("click", ".delAct", function(){
        if(confirm("Are you sure you want to delete this activity?"))
        {
            var it_id = $('#edit_id').val();
            var act_name = $(this).parent('td').siblings('td').children('.act_name').val();
            var href = $(this).attr('href') + '?it_id=' + it_id + '&name=' + act_name;
            $(this).attr('href', href);
            
            $.get('/deleteAct', {it_id: it_id, name: act_name});
            var btnparent = $(this).parent();
            btnparent.parent().remove();
        }
    });

    $(document).on("click", ".editMemory", function(){
        var _id = $(this).parent().siblings(".col-md-8").children().children("p").text();
        var href = $(this).attr('href') + "?_id=" + _id;
        $(this).attr('href', href);
    })
    var nums = '0123456789';
    var ID_LENGTH = 8;
    var rtn = '';

    for (var i = 0; i < ID_LENGTH; i++) 
    {
        rtn += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    $('#it_id').val(rtn);
    $('#act_id').val(rtn);

    $('#RegUsername').keyup(function(){
        var username = $(this).val();
        $.get('/checkUsername', {username: username}, function(result){
            if(result.username === username){
                $('#RegUsername').css('background-color', 'red');
                $('#usererr').text('Username already exists');
                $('#usererr').css('color', 'orange');
                $('#register').prop('disabled', true);
            }
            else{
                $('#RegUsername').css('background-color', 'white');
                $('#usererr').text('');
                $('#register').prop('disabled', false);
            }
            if($('#bdayerr').text() != '' || $('#message').text() != '')
            {
                $('#register').prop('disabled', true);
            }
        })
    });

    $('#birthday').change(function(){
        var bday = new Date($(this).val());
        var ageDifMs = Date.now() - bday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = Math.abs(ageDate.getFullYear() - 1970);
        if(age < 13)
        {
            $(this).css('background-color', 'red');
            $('#bdayerr').text('Must be at least 13 years old to register');
            $('#bdayerr').css('color', 'orange');
            $('#register').prop('disabled', true);
        }
        else if(age > 110)
        {
            $(this).css('background-color', 'red');
            $('#bdayerr').text('Sorry, the age limit is 110');
            $('#bdayerr').css('color', 'orange');
            $('#register').prop('disabled', true);
        }
        else{
            $(this).css('background-color', 'white');
            $('#bdayerr').text('');
            $('#register').prop('disabled', false);
        }
        if($('#usererr').text() != '' || $('#message').text() != '')
        {
            $('#register').prop('disabled', true);
        }
    })

    var sdate;
    var edate;
    var edit_sdate = new Date ($('#it_sdate').val());
    var edit_edate = new Date($('#it_edate').val());
    var actDate;
    var memsdate;
    var memedate;
    $('#it_start').change(function(){
        sdate = new Date($(this).val());
        if(edate != null){

            if(sdate.getTime() > edate.getTime())
            {
                $(this).css('background-color', 'red');
                $('#it_end').css('background-color', 'red');
                $('#it_error1').text("End Date must not be");
                $('#it_error2').text("earlier than Start Date");
                $('#create_it').prop('disabled', true);
                $('#add').prop('disabled', true);
            }
            else{
                $('#it_error1').html("&nbsp;");
                $('#it_error2').html("&nbsp;");
                $(this).css('background-color', 'white');
                $('#it_end').css('background-color', 'white');
                $('#create_it').prop('disabled', false);

                if(actDate != null){
                    if(actDate.getTime() < sdate.getTime() || actDate.getTime() > edate.getTime())
                    {
                    $('.pull-right').text("Date of Activity must be within Start and End Date");
                    $('.pull-right').css('color', 'red');
                    $('#add').prop('disabled', true);
                    $('#act_date').css('background-color', 'red');
                   }
                   else{
                       $('.pull-right').text("");
                       $('#act_date').css('background-color', 'white');
                       $('#add').prop('disabled', false);
                   }
                }
            }
        }
        else
        {
            if(actDate != null){
                if(actDate.getTime() < sdate.getTime())
                {
                $('.pull-right').text("Date of Activity must not be earlier than Start Date");
                $('.pull-right').css('color', 'red');
                $('#add').prop('disabled', true);
                $('#act_date').css('background-color', 'red');
               }
               else{
                   $('.pull-right').text("");
                   $('#act_date').css('background-color', 'white');
                   $('#add').prop('disabled', false);
               }
            }
        }
        
    })

    $('#it_end').change(function(){
        edate = new Date($(this).val());
        if(sdate != null){
            if(sdate.getTime() > edate.getTime())
            {
                $(this).css('background-color', 'red');
                $('#it_start').css('background-color', 'red');
                $('#it_error1').text("End Date must not be");
                $('#it_error2').text("earlier than Start Date");
                $('#create_it').prop('disabled', true);
                $('#add').prop('disabled', true);
            }
            else{
                $('#it_error1').html("&nbsp;");
                $('#it_error2').html("&nbsp;");
                $(this).css('background-color', 'white');
                $('#it_start').css('background-color', 'white');
                $('#create_it').prop('disabled', false);

                if(actDate != null){
                    if(actDate.getTime() < sdate.getTime() || actDate.getTime() > edate.getTime())
                    {
                    $('.pull-right').text("Date of Activity must be within Start and End Date");
                    $('.pull-right').css('color', 'red');
                    $('#add').prop('disabled', true);
                    $('#act_date').css('background-color', 'red');
                   }
                   else{
                       $('.pull-right').text("");
                       $('#act_date').css('background-color', 'white');
                       $('#add').prop('disabled', false);
                   }
                }
            }
        }
        else{
            if(actDate != null){
                if(actDate.getTime() > edate.getTime())
                {
                $('.pull-right').text("Date of Activity must not be later than End Date");
                $('.pull-right').css('color', 'red');
                $('#add').prop('disabled', true);
                $('#act_date').css('background-color', 'red');
               }
               else{
                   $('.pull-right').text("");
                   $('#act_date').css('background-color', 'white');
                   $('#add').prop('disabled', false);
               }
            }
        }
        
    });

    $('#it_sdate').change(function(){
        edit_sdate = new Date($(this).val())
        if(edit_edate != null){
            if(edit_sdate.getTime() > edit_edate.getTime())
            {
                $(this).css('background-color', 'red');
                $('#it_edate').css('background-color', 'red');
                $('#itEditError').css('color', 'red');
                $('#itEditError').text("End Date must not be earlier than Start Date");
                $('#saveIt').prop('disabled', true);
            }
            else{
                $('#itEditError').text("");
                $(this).css('background-color', 'white');
                $('#it_edate').css('background-color', 'white');
                $('#saveIt').prop('disabled', false);
            }
        }
    });

    $('#it_edate').change(function(){
        edit_edate = new Date($(this).val())
        if(edit_sdate != null){
            if(edit_sdate.getTime() > edit_edate.getTime())
            {
                $(this).css('background-color', 'red');
                $('#it_sdate').css('background-color', 'red');
                $('#itEditError').css('color', 'red');
                $('#itEditError').text("End Date must not be earlier than Start Date");
                $('#saveIt').prop('disabled', true);
            }
            else{
                $('#itEditError').text("");
                $(this).css('background-color', 'white');
                $('#it_sdate').css('background-color', 'white');
                $('#saveIt').prop('disabled', false);
            }
        }
    });

    $('.act_date').change(function(){
        var act_date = new Date($(this).val());
        if(act_date.getTime() < edit_sdate.getTime() || act_date.getTime() > edit_edate.getTime())
        {
            $(this).css('background-color', 'red');
            $(this).parent().siblings().children('.editAct').prop('disabled', true);
            $(this).siblings('p').text("Must be within Start and End Date")
        }
        else{
            $(this).css('background-color', 'white');
            $(this).parent().siblings().children('.editAct').prop('disabled', false);
            $(this).siblings('p').text("")
        }
    });

    $('#act_date').change(function(){
        actDate  = new Date($(this).val());
        if(sdate != null && edate != null){
            if(actDate.getTime() < sdate.getTime() || actDate.getTime() > edate.getTime())
            {
             $('.pull-right').text("Date of Activity must be within Start and End Date");
             $('.pull-right').css('color', 'red');
             $('#add').prop('disabled', true);
             $(this).css('background-color', 'red');
            }
            else{
                $('.pull-right').text("");
                $(this).css('background-color', 'white');
                $('#add').prop('disabled', false);
            }
        }
        else{
            if(sdate != null){
                if(actDate.getTime() < sdate.getTime()){
                    $('.pull-right').text("Date of Activity must not be earlier than Start Date");
                    $('.pull-right').css('color', 'red');
                    $('#add').prop('disabled', true);
                    $(this).css('background-color', 'red');
                }
                else{
                    $('.pull-right').text("");
                    $(this).css('background-color', 'white');
                }
            }
            else if(edate != null){
                if(actDate.getTime() > edate.getTime()){
                    $('.pull-right').text("Date of Activity must not be later than End Date");
                    $('.pull-right').css('color', 'red');
                    $('#add').prop('disabled', true);
                    $(this).css('background-color', 'red');
                }
                else{
                    $('.pull-right').text("");
                    $(this).css('background-color', 'white');
                }
            }
        }
    });
    $('#startdate').change(function(){
        memsdate = new Date ($(this).val());
        if(memedate != null){
            if(memsdate.getTime() > memedate.getTime()){
                $(this).css('background-color', 'red');
                $('#enddate').css('background-color', 'red');
                $('#memError').text("End Date must not be earlier than Start Date");
                $('#memError').css("color", "red");
                $('#memory').prop("disabled", true);
            }
            else{
                $(this).css('background-color', 'white');
                $('#enddate').css('background-color', 'white');
                $('#memError').text("");
                $('#memory').prop("disabled", false);
            }
        }
    });

    $('#enddate').change(function(){
        memedate = new Date ($(this).val());
        if(memsdate != null){
            if(memsdate.getTime() > memedate.getTime()){
                $(this).css('background-color', 'red');
                $('#startdate').css('background-color', 'red');
                $('#memError').text("End Date must not be earlier than Start Date");
                $('#memError').css("color", "red");
                $('#memory').prop("disabled", true);
            }
            else{
                $(this).css('background-color', 'white');
                $('#startdate').css('background-color', 'white');
                $('#memError').text("");
                $('#memory').prop("disabled", false);
            }
        }
    });

    $('#editstartdate').change(function(){
        var editmemsdate = new Date ($(this).val());
        var editmemedate = new Date($('#editenddate').val());
            if(editmemsdate.getTime() > editmemedate.getTime()){
                $(this).css('background-color', 'red');
                $('#editenddate').css('background-color', 'red');
                $('#memError').text("End Date must not be earlier than Start Date");
                $('#memError').css("color", "red");
                $('#memory').prop("disabled", true);
            }
            else{
                $(this).css('background-color', 'white');
                $('#editenddate').css('background-color', 'white');
                $('#memError').text("");
                $('#memory').prop("disabled", false);
            }
    });

    $('#editenddate').change(function(){
        var editmemedate = new Date ($(this).val());
        var editmemsdate = new Date($('#editstartdate').val());
            if(editmemsdate.getTime() > editmemedate.getTime()){
                $(this).css('background-color', 'red');
                $('#editstartdate').css('background-color', 'red');
                $('#memError').text("End Date must not be earlier than Start Date");
                $('#memError').css("color", "red");
                $('#memory').prop("disabled", true);
            }
            else{
                $(this).css('background-color', 'white');
                $('#editstartdate').css('background-color', 'white');
                $('#memError').text("");
                $('#memory').prop("disabled", false);
            }
    });



    $('.deleteItinerary').click(function(){
        if(confirm("Are you sure you want to delete this itinerary?"))
        {
            var it_id = $(this).parent().siblings('.col-md-8').children().children('.panel-body').children('.id').text().substring(4);
            $.get('/deleteIt', {it_id : it_id});
            $(this).parent().parent().remove();
        }
    });

    $('#star1').hover(function(){
        $(this).css('color', 'rgb(231, 231, 59)');
        $('#star2').css('color', 'black');
        $('#star3').css('color', 'black');
        $('#star4').css('color', 'black');
        $('#star5').css('color', 'black');
        $('#starCount').text('1');
        $("#stars").val('1');
    });
    $('#star2').hover(function(){
        $('#star1').css('color', 'rgb(231, 231, 59)');
        $(this).css('color', 'rgb(231, 231, 59)');
        $('#star3').css('color', 'black');
        $('#star4').css('color', 'black');
        $('#star5').css('color', 'black');
        $('#starCount').text('2');
        $("#stars").val('2');
    });
    $('#star3').hover(function(){
        $('#star1').css('color', 'rgb(231, 231, 59)');
        $('#star2').css('color', 'rgb(231, 231, 59)');
        $(this).css('color', 'rgb(231, 231, 59)');
        $('#star4').css('color', 'black');
        $('#star5').css('color', 'black');
        $('#starCount').text('3');
        $("#stars").val('3');
    });
    $('#star4').hover(function(){
        $('#star1').css('color', 'rgb(231, 231, 59)');
        $('#star2').css('color', 'rgb(231, 231, 59)');
        $('#star3').css('color', 'rgb(231, 231, 59)');
        $(this).css('color', 'rgb(231, 231, 59)');
        $('#star5').css('color', 'black');
        $('#starCount').text('4');
        $("#stars").val('4');
    });
    $('#star5').hover(function(){
        $('#star1').css('color', 'rgb(231, 231, 59)');
        $('#star2').css('color', 'rgb(231, 231, 59)');
        $('#star3').css('color', 'rgb(231, 231, 59)');
        $('#star4').css('color', 'rgb(231, 231, 59)');
        $(this).css('color', 'rgb(231, 231, 59)');
        $('#starCount').text('5');
        $("#stars").val('5');
    });

    $(document).on("click", ".dashboardReview", function(){
        var it_id = $(this).parent().parent().siblings('.id').children().text();
        $.get('/checkReview', {it_id: it_id}, function(result){
            if(result.it_id != null){
               var href =  '/editReview?it_id='+ result.it_id;
               $(window).attr('location', href);
            }
            else{
               var href = '/review?it_id=' + it_id;
               $(window).attr('location', href);
            }
        });

    })
});
