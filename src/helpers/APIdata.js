const apiData = {
    backendUrl: "http://127.0.0.1:8090/api/",
    loginConfirmation: ()=>{
        const token = localStorage.getItem("token");
        let bearer;
        if(token === ""){
            bearer = ""
        }else{
            bearer = token; 
        }
        return bearer
    },
    getIdUser: ()=>{
        const user = localStorage.getItem("iduser");
        let idUser;
        if(user === ""){
            return null;
        }else{
            idUser = user;
            return idUser
        }
    }
}

export default apiData