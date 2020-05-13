import React from 'react';
import c from './Infoperson.module.css';

const Infoperson = (props) => {
    return (
        <div>
            <div className={c.info_block} >
                <img className={c.avatar} src="https://vrgames.by/sites/default/files/pictures/picture-164663-1516479456.jpg" alt="" />
                <div className={c.description}>
                    <div className={c.infoname}>Mr. Frick</div>
                    <div className={c.info}>
                        <div className={c.text}>My life is impotant!!!</div>
                        <span className={c.date}>on Google 12.03.1982 Verdana</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infoperson;
