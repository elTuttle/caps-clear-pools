export default function manageNavBar(state={
  home: true,
  about: false,
  services: false,
  admin: false
},action){
  switch (action.type) {
    case 'HOME':
      state={
        home: true,
        about: false,
        services: false,
        admin: false
      }
      return state;
    case 'ABOUT':
      state={
        home: false,
        about: true,
        services: false,
        admin: false
      }
      return state;
    case 'SERVICES':
      state={
        home: false,
        about: false,
        services: true,
        admin: false
      }
      return state;
    case 'ADMIN':
      state={
        home: false,
        about: false,
        services: false,
        admin: true
      }
      return state;
    default:
      return state //if no action return state
  }
}
