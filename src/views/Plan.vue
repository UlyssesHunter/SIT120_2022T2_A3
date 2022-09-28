<template>
    <div class="about">
      <body class="container">
                <div class="dateCheck">
                    <input type="checkbox" id ="Monday" value = "Monday" v-model="checkedDates"/>
                    <label for="Monday">Monday</label>
                    <select v-model="selected">
                        <option value="" disabled>Hours spent on study</option>
                        <option v-for="n in 24" :key='n.id'>{{n}}</option>
                    </select>
                </div>
                    <div class="dateCheck">
                    <input type="checkbox" id ="Tuesday" value = "Tuesday" v-model="checkedDates"/>
                    <label for="Tuesday">Tuesday</label>
                    <select v-model="selected">
                        <option value="" disabled>Hours spent on study</option>
                        <option v-for="n in 24" :key='n.id'>{{n}}</option>
                    </select>
                </div>
                <div class="dateCheck">
                    <input type="checkbox" id ="Wednesday" value = "Wednesday" v-model="checkedDates"/>
                    <label for="Wednesday">Wednesday</label>
                    <select v-model="selected">
                        <option value="" disabled>Hours spent on study</option>
                        <option v-for="n in 24" :key='n.id'>{{n}}</option>
                    </select>
                </div>
                <div class="dateCheck">
                <input type="checkbox" id ="Thursday" value = "Thursday" v-model="checkedDates"/>
                <label for="Thursday">Thursday</label>
                <select v-model="selected">
                    <option value="" disabled>Hours spent on study</option>
                    <option v-for="n in 24" :key='n.id'>{{n}}</option>
                </select>
                </div>
                <div class="dateCheck">
                <input type="checkbox" id ="Friday" value = "Friday" v-model="checkedDates"/>
                <label for="Friday">Friday</label>
                <select v-model="selected">
                    <option value="" disabled>Hours spent on study</option>
                    <option v-for="n in 24" :key='n.id'>{{n}}</option>
                </select>
                </div>
                <div class="dateCheck">
                <input type="checkbox" id ="Saturday" value = "Saturday" v-model="checkedDates"/>
                <label for="Saturday">Saturday</label>
                <select class="timeselect" v-model="selected">
                    <option value="" disabled>Hours spent on study</option>
                    <option v-for="n in 24" :key='n.id'>{{n}}</option>
                </select>
                </div>
                <div class="dateCheck">
                <input type="checkbox" id ="Sunday" value = "Sunday" v-model="checkedDates"/>
                <label for="Sunday">Sunday</label>
                <select v-model="selected">
                    <option value="" disabled>Hours spent on study</option>
                    <option v-for="n in 24" :key='n.id'>{{n}}</option>
                </select>
                </div>
                <div :style="styleObject">
                <span>Completed date: {{checkedDates}}</span>    
                <p>Memo is: {{ message }}</p>
                <input v-model="message" placeholder="edit me" />
                </div>
                <button v-on:click="now()"><FancyButton>Submit</FancyButton></button>
                <p>Check: {{ Finished }}</p>  
                <p>Capitalizes helper</p>
                <CapitalizesHelper v-model.capitalize="myText" />
      </body>
      
      <footer class="addoninfo">
          <p>Please <a href="mailto: fake.help@StudeyPlan.com">Contact Service</a> if you have any inquiry.</p>
          <small><i> Copyright &copy; 2022 Jinwen Liu. All right reserved. </i> </small>
        </footer>
    </div>
  </template>

  <script>
    import CapitalizesHelper from '../components/Capitalizes.vue'
    import FancyButton from '../components/FancyBotton.vue'

    export default {
      name: 'app',
      components: { CapitalizesHelper,FancyButton },
      data() {
          return {
                checked:false,
                checkedDates:[],
                planName:'My Plan',
                profileName:'My Name',
                Finished:'Not finished',
                message:'',
                myText: ''
          }
      },
      methods: {
        now() {
            if (this.checkedDates.length>6){
                this.Finished = "Finished check";
            }
        }
      },
      
    }

  </script>
<style>
.container {position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
  width: 400px;
  max-width: 95%;
}
.addoninfo{
    position: absolute;
    bottom: 0;
    height: 50px;
  }
</style>