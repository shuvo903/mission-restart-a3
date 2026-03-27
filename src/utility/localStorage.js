import { toast } from "react-toastify";

const getInstallApp = () => {
  const installAppSTR = localStorage.getItem("installApp");

  if (installAppSTR) {
    const installAppData = JSON.parse(installAppSTR);
    return installAppData;
  } else {
    return [];
  }
};

const addInstallApp = (id) => {
  const installAppData = getInstallApp();

  if (installAppData.includes(id)) {
    toast("This App Already Installed");
  } else {
    installAppData.push(id);

    const data = JSON.stringify(installAppData);

    localStorage.setItem("installApp", data);
  }
};

const removeInstallApp = (id) => {
  const installAppData = getInstallApp();
  
  const remainingApps = installAppData.filter(
    (appId) => parseInt(appId) !== parseInt(id),
  );
  const data = JSON.stringify(remainingApps);
  localStorage.setItem("installApp", data);
  console.log("Removed ID:", id);
};

export { addInstallApp, getInstallApp, removeInstallApp };
