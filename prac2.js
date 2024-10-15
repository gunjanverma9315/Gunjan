/*function rollno(num,delay,nextroll){
    setTimeout(()=>{
        console.log("Rollno is",num);
        if(nextroll) nextroll();
    },delay);
}
rollno(23456,1000,()=>{
    rollno(23457,2000,()=>{
        rollno(23458,3000,()=>{
            rollno(23459,4000);
        });
    });
});
const promise=new Promise((resolve,reject)=>{
    resolve("Promise Resolved");
    reject("Promise Rejected");
});
promise.then(()=>{
    console.log("This is my promise");
}).catch(()=>{
    console.log("Error Page")
})*/

function getRoll(num,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Rollno. is",num);
            resolve("Successfully done");
        },delay);
    });

}
getRoll(1,1000).then(()=>{
    getRoll(2,2000).then(()=>{
        getRoll(3,3000);
    });
});