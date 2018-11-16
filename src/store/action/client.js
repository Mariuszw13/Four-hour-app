import {SET_CLIENTS} from "./actionTypes";

export const fetchClients = (querySnapshot) => {

    return (dispatch) => {
        const clients = querySnapshot.docs.map((doc) => {
            return {
                ...doc.data(),
                key: doc.id
            };
        });

        dispatch(setClients(clients));
    }
}


 const sortClients = (clients) => {
    let filteredList = clients.filter(client => client.ranking > 50);
    return filteredList.sort((lf, rh) => lf.ranking < rh.ranking && lf.monthlySalary < rh.monthlySalary);
}

export const setClients = (clients) => {
    clients = sortClients(clients);
    return {
        clients,
        type: SET_CLIENTS
    };
}