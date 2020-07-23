var button = document.getElementById("buttonMeasureNetwork");
document.getElementById("entity_creation_time").innerHTML = "You created entity at: ";
document.getElementById("entity_creation_time_on_second_end").innerHTML = "Entity created by someone else was created on your end at: ";
button.onclick = function(){
    console.log("Entity created by someone else was created on your end at: ", global_variable_network_created_entity);
}
setInterval(function(){ 
   document
    .getElementById("entity_creation_time_on_second_end")
    .innerHTML = "Entity created by someone else was created on your end at: " + global_variable_network_created_entity; 
}, 1000);
