const getInstallApp = () => {

const installAppSTR = localStorage.getItem("installApp");

if(installAppSTR) {

    const installAppData = JSON.parse(installAppSTR);
    return installAppData;
}
else {
    return [];
}
}

const addInstallApp = (id) => {
    
    const installAppData = getInstallApp();

    if (installAppData.includes(id)) {
        
        alert("acehe ei ta")
    }
    else {
       installAppData.push(id) ;

       const data = JSON.stringify(installAppData);

       localStorage.setItem("installApp",data)

    }
};



export {addInstallApp,getInstallApp};