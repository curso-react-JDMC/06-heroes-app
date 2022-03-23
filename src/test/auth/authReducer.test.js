import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"



describe('Pruebas en authReducer', () => { 
    test('debe retornar el estado por defecto', () => { 
        const state = authReducer({ logged:false},{});
        expect(state).toEqual({ logged:false});
    })
    test('debe autenticar y colocar el name del usuario', () => { 
        const action = { 
            type:types.login, 
            payload: {
                name:'prueba'
            }
         }
         
        const state = authReducer({ logged:false},action);
        expect(state).toEqual({
            logged:true,
            name:'prueba'
        });
    })
    test('debe borrar el name del usuario y el logged en false', () => { 
        const action = {
            type: types.logout 
        };

        const state = authReducer({ logged:true,name:'pruebita'},action)
        expect(state).toEqual({ logged:false})
    })
})