const initialState = {
    tasks: [],
    filter: 'all', // Default filter
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        // Implement logic pour ajouter la tache a l'etat
        return state;
      case 'EDIT_TASK':
        // Implement logic pour modifier la tache de l'etat
        return state;
      case 'TOGGLE_TASK':
        // Implement logic mofifier la tache de la proprieté "isDone".
        return state;
      case 'FILTER_TASKS':
        // Implement logic pour filter tache basé sur le type filte
        return state;
      default:
        return state;
    }
  };
  
  export default taskReducer;
  