const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		
		actions: {
			// Use getActions to call a function within a fuction

			syncTokenFromSessionStorage: () =>{

				const token = sessionStorage.getItem("token");
				console.log("Aplicattion just loaded, synching the local storage")
				if (token && token !="" && token != undefined ) setStore({token: token});

			
			},

			logout: () =>{

				sessionStorage.removeItem("token");
				console.log("Login out")
				setStore({token: null});

			
			},
			
			login: async (email,password) =>{
					const opts = {

									method: 'POST',
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify({
										"email": email,
										"password": password
										
										})
									};
					
					
						try {
							const resp = await fetch("https://3001-4geeksacade-reactflaskh-vp4sjbpvukj.ws-eu88.gitpod.io/api/login",opts)
							if(resp.status !== 200){
									alert("hay un error aqui");
									return false;
								}
							
							const data = await resp.json();
							console.log("viene de backed", data);						
							sessionStorage.setItem("token", data.token)
							setStore({token: data.token});
							
							return true;							
						}
						catch(error){
							console.error("Jay un error en catch")
						}	  

				
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				const store = getStore();
				const opts = {
					headers:{
						"Authorization": "Bearer " + store.token
					}
				}
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({message: data.message}))
					.catch(error => console.log("Error loading message from backend", error))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
