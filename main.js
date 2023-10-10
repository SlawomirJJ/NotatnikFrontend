const main = {template: `
<div>
<button type="button" class="btn btn-primary m-2 fload-end" @click="generatePDF()"> Generate report PDF </button>
<button type="button"
 class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
Add user
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            First name
        </th>
        <th>
            Last name
        </th>
        <th>
            Birth Date
        </th>
        <th>
            Gender
        </th>
        <th>
            Additional Attributes
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="dep in users">
        <td>{{dep.firstName}}</td>
        <td>{{dep.lastName}}</td>
        <td>{{dep.birthDate}}</td>
        <td>{{dep.gender}}</td>
        <td>
            <!-- Wyświetl dodatkowe atrybuty jako listę -->
            <ul>
                <li v-for="attr in dep.additionalAttributes">
                    {{ attr.attributeName }}: {{ attr.value }}
                </li>
            </ul>
        </td>
        <td>
            <button type="button"
                class="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
                @click="editClick(dep)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(dep)"
                class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>    
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        
    <div class="input-group mb-3">
        <span class="input-group-text">First name</span>
        <input type="text" class="form-control" v-model="firstName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Last name</span>
        <input type="text" class="form-control" v-model="lastName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Birth date</span>
        <input type="text" class="form-control" v-model="birthDate">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Gender</span>
        <input type="text" class="form-control" v-model="gender">
    </div>

    <button type="button" @click="createClick()"
    class="btn btn-primary">
    Create
    </button>
    
</div>
</div>
</div>
</div>

<div class="modal fade" id="updateModal" tabindex="-1"
    aria-labelledby="updateModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">{{modalTitle}}</h5>    
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
        
    <div class="input-group mb-3">
        <span class="input-group-text">First name</span>
        <input type="text" class="form-control" v-model="firstName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Last name</span>
        <input type="text" class="form-control" v-model="lastName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Birth date</span>
        <input type="text" class="form-control" v-model="birthDate">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text">Gender</span>
        <input type="text" class="form-control" v-model="gender">
    </div>

    <button type="button" @click="updateClick()"
    class="btn btn-primary">
    Update
    </button>
    
</div>
</div>
</div>
</div>



</div>`,
data(){
    return{
        users:[],

        modalTitle:"",
        firstName:"",
        lastName:"",
        birthDate:"",
        gender:"",
        userId:""


    };
},
mounted() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
      try {
        const response = await axios.get(variables.API_URL + '/User/GetAllUsers');
        this.users = response.data;
        console.log('Dane użytkowników:', this.users);
      } catch (error) {
        console.error('Błąd podczas pobierania danych z API:', error);
      }
    },
    addClick(){
        this.modalTitle="Add User";
        this.firstName="";
        this.fastName="";
        this.birthDate="";
        this.gender="";
    },
    editClick(user){
        this.modalTitle="edit User";
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.birthDate=user.birthDate;
        this.gender=user.gender;

        axios
          .get(variables.API_URL + '/User/GetUserId', {
            params: {
              firstName: user.firstName,
              lastName: user.lastName,
              birthDate: user.birthDate,
              gender: user.gender,
            },
          })
          .then((response) => {
            this.userId = response.data;
          })
    },
    updateClick() {
            const updatedUser = {
              id: this.userId,
              firstName: this.firstName,
              lastName: this.lastName,
              birthDate: this.birthDate,
              gender: this.gender,
            };
      
            axios
              .put(variables.API_URL + '/User/UpdateUser', updatedUser)
              .then((updateResponse) => {
                this.refreshData();
                alert(updateResponse.data);
              })
              .catch((updateError) => {
                console.error('Błąd podczas aktualizacji użytkownika:', updateError);
              });
      },
    createClick() {
        console.log("function createClick is called")
        
        const requestData = {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            gender: this.gender
        };
    
        let result = axios.post( variables.API_URL+ '/User/CreateUser', requestData)
            .then((result) => {
                alert(result.data);
                this.refreshData();
            });

            console.log("2 function createClick is called", this.firstName,this.lastName,this.birthDate,this.gender)
    },
    deleteClick(user) {
        axios
          .get(
            variables.API_URL + '/User/GetUserId',
            {
              params: {
                firstName: user.firstName,
                lastName: user.lastName,
                birthDate: user.birthDate,
                gender: user.gender,
              },
            }
          )
          .then((response) => {
            const userId = response.data; 
      
            axios
            .delete(variables.API_URL + `/User/DeleteUser/${userId}`)
              .then((deleteResponse) => {
                this.refreshData();
                alert(deleteResponse.data);
              })
              .catch((deleteError) => {
                console.error('Błąd podczas usuwania użytkownika:', deleteError);
              });
          })
          .catch((error) => {
            console.error('Błąd podczas pobierania ID użytkownika:', error);
          });
    },
    generatePDF()  {
  const url = variables.API_URL + '/User/GenerateReport'; 

  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';

  link.click();

  },

  }
};