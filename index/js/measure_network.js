var button = document.getElementById("buttonMeasureNetwork");
document.getElementById("position_update_time").innerHTML = "You changed position at: ";
document.getElementById("position_update_time_on_second_end").innerHTML = "Another entity changed position at: ";
button.onclick = function(){
    console.log("Another entity changed position at: ", global_variable_network_changed_position_time);
}
setInterval(function(){ 
   document
    .getElementById("position_update_time_on_second_end")
    .innerHTML = "Another entity changed position at: " + global_variable_network_changed_position_time; 
}, 1000);
