import { Link, Route, Routes, useLocation } from "react-router-dom";
import { data, route } from "./data";

const App = () => {
    const { pathname } = useLocation();

    console.log(pathname);
    
    return (
        <div className='flex'>
            <div className='flex flex-col gap-y-4 border-r-2 border-solid border-[#166199] pr-6'>
                {data.map((item, index) => (
                    <div key={index} className=''>
                        <Link to={item.path} className='no-underline text-3xl'>
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <Routes>
                    {route.map((item) => (
                        <Route path={item.path} element={item.component} />
                    ))}
                </Routes>
            </div>
        </div>
    );
};

export default App;
