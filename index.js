$(function(){
    
    $("#nameform").submit(evt=>{
        evt.preventDefault();
        let name = $('#fname').val() + " " + $('#lname').val();
        $(".jumbotron").removeClass('d-none');
        $(".jumbotron").find('h1').text([...name].reverse().join(""));

        return false;
    })   
});