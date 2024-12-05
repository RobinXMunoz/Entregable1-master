import { StyleSheet } from 'react-native';

const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    marginBottom: 20, // Espaciado entre el ícono y el texto
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },

  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
},
languageButton: {
    backgroundColor: '#790000', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 3, // Sombra para Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
},
languageButtonText: {
    color: '#fff', // Blanco para el texto
    fontSize: 16,
    fontWeight: 'bold',
},

});

export default ProfileScreenStyles;
