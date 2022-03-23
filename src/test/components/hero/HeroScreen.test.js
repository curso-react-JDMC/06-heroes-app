const { mount } = require("enzyme")
const { MemoryRouter, Routes, Route } = require("react-router-dom");
const { HeroScreen } = require("../../../components/hero/HeroScreen");

const mockNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() => mockNavigate
}))

describe('pruebas en heroScreen', () => { 

    test('no debe mostrar el heroScreen si no hay un heroe en el url', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen/>}/>
                    <Route path="/" element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('h1').text().trim()).toBe('No hero page');
    })

    test('debe mostrar un heroe si el parametro existe y se encuentra', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroScreen/>}/>
                    <Route path="/" element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('debe regresar a la pantalla anterior',()=>{
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroScreen/>}/>
                    <Route path="/" element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    })

    test('debe mostrar el no hero page si no tenemos un heroe', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider3456456']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroScreen/>}/>
                    <Route path="/" element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('No hero page');
    })
 })