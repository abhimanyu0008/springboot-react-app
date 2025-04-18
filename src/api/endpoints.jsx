// src/api/endpoints.js
const endpoints = {
    faculty: {
      list: '/faculty',
      add: '/faculty',
      update: (id) => `/faculty/${id}`,
      delete: (id) => `/faculty/${id}`,
    },
    student: {
      list: '/students',
      add: '/students',
      update: (id) => `/students/${id}`,
      delete: (id) => `/students/${id}`,
    },
    employee:{
      list:'/employees',
      add:'/employees',
      update:(id)=>`/employees/${id}`,
      delete:(id)=>`/employees/${id}`
    }
    // ... up to 500+ APIs
  };
  
  export default endpoints;
  