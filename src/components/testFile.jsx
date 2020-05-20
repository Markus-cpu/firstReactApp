import React from 'react';
import c from './Content.module.css';


const Content = () => {
    return (
        <div className={c.content}>
            <img className={c.img} src="https://www.goldmansachs.com/worldwide/banner-img-1200x200.jpg" alt="" />
            <div className={c.info_block}>
               <img className={c.avatar} src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/29/2901a6648beaa2944e51565cd2da5a8ba694c02c_full.jpg" alt=""/>
               <div className={c.description}>Mr. Robot</div>
            </div>
            <div className={c.info_post}>
                My life is impotant!!!
                <div>
                   <span className={c.date}>on Google 12.03.1982 Verdana</span>
                </div>
                <div className={c.new_post}>
                    New post
                </div>
                <div className={c.items}>
                    <div className={c.item}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ex magnam facilis qui sit, ullam repellendus ipsa sunt asperiores 
                        sed nobis provident voluptatum quis in praesentium iste harum amet labore? Vitae aperiam voluptatum cumque voluptas 
                        laboriosam dolores recusandae, accusantium exercitationem?
                    </div>
                    <div className={c.item}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro harum voluptas quos ullam impedit autem dolorem, alias, 
                        reprehenderit, nisi nam aspernatur! Quidem modi dolor deserunt repellendus. Eos recusandae sequi debitis accusamus, 
                        porro odio eius pariatur laboriosam architecto possimus facilis, ducimus facere dicta eveniet esse perferendis quidem dignissimos. 
                        Velit, harum! Nostrum cupiditate ut laborum inventore, accusantium placeat a dolores.
                        <span>Eveniet omnis distinctio officia quos nemo sunt perspiciatis id aperiam.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;


