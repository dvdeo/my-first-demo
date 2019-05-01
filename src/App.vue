<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col sm="8" class="col-left">
          <app-title/>
          <app-navbar/>
          <app-table/>
          <app-pagination/>
        </b-col>
        <b-col sm="4" class="col-right">
          
          <app-profile/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppTitle from './components/Title'
import AppTitleDetail from './components/TitleDetail'
import AppNavbar from './components/Navbar'
import AppTable from './components/Tabledata'
import AppPagination from './components/Pagination'
import AppProfile from './components/Itemdetail'

export default {
  name: 'App',
  components: {
   AppTitle,
   AppTitleDetail,
   AppNavbar,
   AppTable,
   AppPagination,
   AppProfile
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 20px;
}

.col-left{
  text-align: center;
}

.col-right{
  border-left: solid 1px #979A9A;
  height: 900px;
  text-align: center;
}
</style>
