import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";


jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate: ()=> <span>redireccionando...</span>
}));
describe('pruebas en privateRoutes', () => { 
    Storage.prototype.setItem = jest.fn();

    test('debe mostrar el componente si esta autenticado y guardar en el localStorage', () => { 
       const contextValue = {
           user: {
               logged:true,
               name:'pepe'
           }
       } ;
       const wrapper = mount(
           <AuthContext.Provider value={contextValue}>
              <MemoryRouter initialEntries={['/']}>
                  <PrivateRoute>
                    <h1>Private Component</h1>
                  </PrivateRoute>
              </MemoryRouter>
           </AuthContext.Provider>
       );
       expect(wrapper.text().trim()).toBe('Private Component');
       expect(localStorage.setItem).toHaveBeenLastCalledWith('lastPath','/')
    })

    test('debe bloquear el componente si no esta autenticado', () => { 
        const contextValue = {
            user: {
                logged:false,
                name:'pepe'
            }
        } ;
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
               <MemoryRouter initialEntries={['/']}>
                   <PrivateRoute>
                     <h1>Private Component</h1>
                   </PrivateRoute>
               </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('redireccionando...')
        console.log(wrapper.html());
     })
})