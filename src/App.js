import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import {RecoilRoot} from "recoil";

function App() {

    return (
        <>
            <div>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            background: '#12141c',
                            color: '#e7e9f2',
                            border: '1px solid #262a38',
                        },
                        success: {
                            iconTheme: {
                                primary: '#48d8c0',
                                secondary: '#0b0d13',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: '#ef6f6c',
                                secondary: '#0b0d13',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        ></Route>
                    </Routes>
                </RecoilRoot>
            </BrowserRouter>
        </>
    );
}

export default App;