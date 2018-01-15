export default function manageNavBar(state={
  home: true,
  about: false,
  services: false
},action){
  switch (action.type) {
    case 'HOME':
      state={
        home: true,
        about: false,
        services: false
      }
      return state;
    case 'ABOUT':
      state={
        home: false,
        about: true,
        services: false
      }
      return state;
    case 'SERVICES':
      state={
        home: false,
        about: false,
        services: true
      }
      return state;
    default:
      return state //if no action return state
  }
}
