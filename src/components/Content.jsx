import React from 'react';
import './Content.module.css';

const Content = () => {
    return (
        <div className="content">
            <img className="content-img" src="https://wallup.net/wp-content/uploads/2017/05/29/227739-dragon-Kali_Linux-748x421.png" alt="" />
            <div>
               avatar+description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;