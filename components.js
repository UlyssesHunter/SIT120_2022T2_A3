Vue.component('global',{
    template:'Global',
});

var planname={
    template:'<div><global></global>My Plan</div>',
};
var profileName={
    template:'<div><global></global>My Name</div>',
};

var app =new Vue({
    el:'#app',
    data:{
        message:'hello',
        checked:false,
        checkedDates:[],
        planName:'My Plan',
        profileName:'My Name',
    },
    components:{
        planname,
        profileName,
    },
    computed: {
        now() {
          return this.checkedDates.length>6? 'Finished check':'Unfinished'
        }
    }
});

var client= new Vue({
    el: '#client',
    data:{
        client:{
            firstName:'John',
            lastName:'Doe',
        },
        
    },
    components:{
            
    },
});
