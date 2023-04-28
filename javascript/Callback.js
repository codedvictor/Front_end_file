function anotherEventListener(typeofevent, callback){
    var expectedEvent = {
        eventType: "mClick",
        key: "p",
        duration: 3,
    }
    if (expectedEvent.eventType === typeofevent){
        callback(expectedEvent);
    }
}

anotherEventListener("mClick", function(e){
    console.log(e);
});