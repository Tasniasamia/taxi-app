import React from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;