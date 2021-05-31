<template>
    

<div class="container">
    <div v-if="user">
        Name: {{user.name}} <br>
        Email: {{user.email}}<br><br>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body">
                   <div>
                      <div class="alert alert-success" v-show="success">Register success</div>
                      <div class="alert alert-success" v-show="successUpdate">Update success</div>
                      <div class="alert alert-success" v-show="successDelete">Delete success</div>
                    <b-button class="btn btn-success" @click="$bvModal.show('create_user')">Add User</b-button>
                    <b-modal id="create_user" hide-footer title="Add User">
                            <div class="p-2 w-full">
                                <label class="w-full" for="name">Name</label>
                                <span class="w-full text-red-500" ></span>
                                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" v-model="form.name" >
                            </div>
                            <div class="alert alert-danger" v-if="errors[0] && errors[0].name">
                                    {{ errors[0].name[0] }}
                            </div>
                            <div class="p-2 w-full">
                                <label for="email">Your e-mail</label>
                                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" v-model="form.email">
                            </div>
                            <div class="alert alert-danger" v-if="errors[0] && errors[0].email">
                                    {{ errors[0].email[0] }}
                            </div>
                            <div class="p-2 w-full">
                                <label for="password">Password</label>
                                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Password" type="password" v-model="form.password" name="password">
                            </div>
                            <div class="alert alert-danger" v-if="errors[0] && errors[0].password">
                                    {{ errors[0].password[0] }}
                            </div>
                            <div class="p-2 w-full">
                                <label for="confirm_password">Confirm Password</label>
                                <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Confirm Password" type="password" v-model="form.password_confirmation" name="password_confirmation">
                            </div>

                            <div class="p-2 w-full mt-4"></div>
                                <button @click.prevent="saveForm"  type="submit" class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                           
                    </b-modal>
                    
                    </div>
                    <br /><br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="users in userItem" :key="users.id">
                                <td>{{ users.id }}</td>
                                <td>{{ users.name }}</td>
                                <td>{{ users.email }}</td>
                                <td>
                                    <button @click="$bvModal.show('edit_user')" @click.prevent="editForm(users)" class="btn btn-primary">Edit</button>
                                    
                                    <button  @click.prevent="deleteForm(users.id)" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <b-modal id="edit_user" hide-footer title="Edit User">
                        <form method="POST" enctype="multipart/form-data" v-on:submit.prevent="updateForm(editItem.id)">
                        <div class="p-2 w-full">
                            <label class="w-full" for="name">Name</label>
                            <span class="w-full text-red-500" ></span>
                            <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" v-model="editItem.name" >
                            <div class="alert alert-danger" v-if="errors[0] && errors[0].name">
                                {{ errors[0].name[0] }}
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <label for="email">Your e-mail</label>
                            <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" v-model="editItem.email" >
                        </div>
                        <div class="alert alert-danger" v-if="errors[0] && errors[0].email">
                                {{ errors[0].email[0] }}
                        </div>
                        <div class="p-2 w-full mt-4"></div>
                            <button  type="submit" class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
                        </form>
                </b-modal>
                </div>
            </div>
            
        </div>
       
    </div>
</div>
</template>
<script>
export default {


    data() {
        return {
            form:{
                name: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            userItem : {},
            errors:{},
            success:false,
            successUpdate: false,
            successDelete: false,
            editItem : {'email':'','name':'','id':''},
            user:null
        }
    },
    methods : {
       saveForm(){
            this.axios.post('/api/register', this.form).then((response) =>{
                this.userItem.push(response.data.user);
                this.$bvModal.hide('create_user');
                this.success = true;
                this.successUpdate = false;
                this.successDelete = false;
            }).catch((error) =>{
                this.errors = {};
                if (error.response.status == 400) {
                    this.errors = error.response.data;
                }
            })
        },
        editForm(users) {
            this.editItem.name = users.name;
            this.editItem.email = users.email;
            this.editItem.id = users.id;
        },
        updateForm(id){
            this.axios.put('/api/update/'+ id , this.editItem).then((response) =>{
                this.$bvModal.hide('edit_user');
                this.successUpdate = true;
                this.successDelete = false;
                this.success = false;


            }).catch((error) =>{
                this.errors = {};
                if (error.response.status == 400) {
                    this.errors = error.response.data;
                }
                
            }),
            this.axios.get('api/listuser').then((response) => {
                this.userItem = response.data.user;
            });
        },
        deleteForm(id) {
            this.axios.delete('api/delete/'+ id).then((response) => {
                this.successDelete = true;
                this.success = false;
                this.successUpdate = false;
            });
            this.axios.get('api/listuser').then((response) => {
                this.userItem = response.data.user;
            });
        },
        logout() {
            this.axios.post('api/logout').then((response) => {
                // console.log(response.data.user);
                this.$router.push('/'); 
            });
        }
    },
    created() {
        this.axios.get('api/listuser').then((response) => {
            this.userItem = response.data.user;
        });
    },
    mounted(){
        this.axios.get('/api/user').then((res)=>{
            this.user = res.data;
        })
    }
    
}
</script>